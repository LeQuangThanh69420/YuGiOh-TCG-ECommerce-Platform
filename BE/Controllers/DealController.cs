using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.Model.Dto;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    public class DealController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly UserCardController _userCard;
        public DealController(DataContext context, UserCardController userCard)
        {
            _context = context;
            _userCard = userCard;
        }

        [HttpGet("SearchDeal")]
        public async Task<ActionResult<List<DealSearchOutputDto>>> SearchDeal([FromQuery] DealSearchInputDto input)
        {
            var deal = from Deal in _context.Deal 
            join UserCard in _context.UserCard on Deal.UserCardId equals UserCard.UserCardId 
            join Card in _context.Card on UserCard.CardId equals Card.CardId 
            join User in _context.User on UserCard.UserId equals User.UserId
            where (string.IsNullOrWhiteSpace(input.SellUsername) || User.Username.Contains(input.SellUsername))
            && (string.IsNullOrWhiteSpace(input.CardName) || Card.CardName.Contains(input.CardName))
            && (string.IsNullOrWhiteSpace(input.CardTypeName) || Card.CardTypeName == input.CardTypeName)
            && (string.IsNullOrWhiteSpace(input.CardOriginName) || Card.CardOriginName == input.CardOriginName)
            && (string.IsNullOrWhiteSpace(input.CardElementName) || Card.CardElementName == input.CardElementName)
            && (string.IsNullOrWhiteSpace(input.CardRarityName) || Card.CardRarityName == input.CardRarityName)
            && (input.PriceFrom == null || input.PriceFrom == 0 || Deal.Price >= input.PriceFrom) && (input.PriceTo == null || Deal.Price <= input.PriceTo)
            && (input.DateFrom == null || Deal.CreateDate >= input.DateFrom) && (input.DateTo == null || Deal.CreateDate <= input.DateTo)
            && (Deal.BuyUserId == null)
            select new DealSearchOutputDto() {
                DealId = Deal.DealId,
                CardId = Card.CardId,
                SellUsername = User.Username,
                CardName = Card.CardName,
                CardImageURL = Card.CardImageURL,
                CardTypeName = Card.CardTypeName,
                CardOriginName = Card.CardOriginName,
                CardElementName = Card.CardElementName,
                CardRarityName = Card.CardRarityName,
                Price = Deal.Price,
                CreateDate = Deal.CreateDate,
            };
            return await deal.ToListAsync();
        }

        [HttpPost("CreateDeal")]
        public async Task<ActionResult> CreateDeal([FromBody] DealCreateInputDto input)
        {
            var selluser = await _context.User.SingleOrDefaultAsync(u => u.Username == input.SellUsername);
            if (selluser == null) return BadRequest(new {message = "Tài khoản không tồn tại!"});
            var usercard = await _context.UserCard.SingleOrDefaultAsync(uc => uc.UserCardId == input.UserCardId && uc.UserId == selluser.UserId);
            if (usercard.UserCardId == null) return BadRequest(new {message = "Không sở hữu thẻ này!"});
            if (usercard.OnDeal == true) return BadRequest(new {message = "Card đang nằm trong một deal khác!"});
            if (input.Price <= 0) return BadRequest(new {message = "Giá tiền không thoả mãn"});
            else 
            {
                var newdeal = new Deal 
                {
                    SellUserId = selluser.UserId,
                    BuyUserId = null,
                    UserCardId = usercard.UserCardId,
                    Price = input.Price,
                    CreateDate = DateTime.UtcNow,
                };
                _context.Deal.Add(newdeal);
                await _userCard.MakeOnDeal(usercard.UserCardId);
                await _context.SaveChangesAsync();
            }
            return Ok(new {message = "Tạo mới giao dịch thành công!"});
        }

        [HttpPut("EditDeal")]
        public async Task<ActionResult> EditDeal([FromBody] DealEditInputDto input)
        {
            var deal = await _context.Deal.SingleOrDefaultAsync(d => d.DealId == input.DealId);
            if (input.DealId == null ) return BadRequest(new {message = "Không có giao dịch này!"});
            if (input.Price <= 0) return BadRequest(new {message = "Giá tiền không thoả mãn"});
            else
            {
                await _userCard.RemoveOnDeal(deal.UserCardId);
                await _userCard.MakeOnDeal(input.UserCardId);
                deal.UserCardId = input.UserCardId;
                deal.Price = input.Price;
                await _context.SaveChangesAsync();
            }
            return Ok(new {message = "Sửa giao dịch thành công!"});
        }

        [HttpDelete("DeleteDeal")]
        public async Task<ActionResult> DeleteDeal([FromBody] DealDeleteInputDto input)
        {
            var deal = await _context.Deal.SingleOrDefaultAsync(d => d.DealId == input.DealId);
            if (deal == null) return NotFound(new {message = "Không tìm thấy giao dịch này!" });
            else
            {
                _context.Deal.Remove(deal);
                await _userCard.RemoveOnDeal(deal.UserCardId);
                await _context.SaveChangesAsync();
            }
            return Ok(new {message = "Xóa giao dịch thành công!" });
        }
        
        [HttpPost("AcceptDeal")]
        public async Task<ActionResult> AcceptDeal([FromBody] DealAcceptInputDto input)
        {
            var buyuser = await _context.User.SingleOrDefaultAsync(u => u.Username == input.BuyUsername);
            if (buyuser == null) return BadRequest(new {message = "Tài khoản không tồn tại!"});
            var deal = await _context.Deal.SingleOrDefaultAsync(d => d.DealId == input.DealId);
            if (buyuser.UserId == deal.SellUserId) return BadRequest(new {message = "Không thể mua thẻ của chính mình"});
            if (buyuser.Money < deal.Price) return BadRequest(new {message = "Tài khoản không đủ tiền"});
            if (input.DealId != deal.DealId || input.DealId == null ) return BadRequest(new {message = "Không có giao dịch này!"});
            if (deal.BuyUserId != null) return BadRequest(new {message = "Giao dịch không tồn tại"});
            else
            {
                deal.BuyUserId = buyuser.UserId;
                await _userCard.ChangeOwner(deal.UserCardId, buyuser.UserId);
                buyuser.Money -= deal.Price;
                var seller = await _context.User.SingleOrDefaultAsync(u => u.UserId == deal.SellUserId);
                if (seller != null)
                {
                    seller.Money += deal.Price;
                }
                await _context.SaveChangesAsync();
            }
            return Ok(new {message = "Mua hàng thành công!"});
        }
    }
}