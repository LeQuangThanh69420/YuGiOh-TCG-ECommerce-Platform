using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.InterfaceController;
using BE.Model.Dto;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    public class CardController : BaseApiController, ICardController
    {
        private readonly DataContext _context;
        public CardController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("SearchCard")]
        public async Task<ActionResult<List<CardSearchOutputDto>>> SearchCard([FromQuery]CardSearchInputDto input)
        {
            var card = from Card in _context.Card
            where (string.IsNullOrWhiteSpace(input.CardName) || Card.CardName.Contains(input.CardName))
            && (string.IsNullOrWhiteSpace(input.CardTypeName) || Card.CardTypeName == input.CardTypeName)
            && (string.IsNullOrWhiteSpace(input.CardOriginName) || Card.CardOriginName == input.CardOriginName)
            && (string.IsNullOrWhiteSpace(input.CardElementName) || Card.CardElementName == input.CardElementName)
            && (string.IsNullOrWhiteSpace(input.CardRarityName) || Card.CardRarityName == input.CardRarityName)
            select new CardSearchOutputDto() {
                CardImageURL = Card.CardImageURL,
                CardRarityName = Card.CardRarityName
            };
            return await card.ToListAsync();
        }

        [HttpGet("GetCardType")]
        public async Task<ActionResult<List<CardType>>> GetCardType()
        {
            return await _context.CardType.ToListAsync();
        }

        [HttpGet("GetCardOrigin")]
        public async Task<ActionResult<List<CardOrigin>>> GetCardOrigin()
        {
            return await _context.CardOrigin.ToListAsync();
        }

        [HttpGet("GetCardElement")]
        public async Task<ActionResult<List<CardElement>>> GetCardElement()
        {
            return await _context.CardElement.ToListAsync();
        }
        
        [HttpGet("GetCardRarity")]
        public async Task<ActionResult<List<CardRarity>>> GetCardRarity()
        {
            return  await _context.CardRarity.ToListAsync();
        }
    }
}