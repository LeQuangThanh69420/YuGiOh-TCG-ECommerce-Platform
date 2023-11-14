using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace BE.Controllers
{
    public class UserCardController : BaseApiController
    {
        private readonly DataContext _context;
        public UserCardController(DataContext context)
        {
            _context = context;
        }
        
        [NonAction]
        public async Task MakeOnDeal (long UserCardId)
        {
            var usercard = await _context.UserCard.SingleOrDefaultAsync(uc => uc.UserCardId == UserCardId);
            usercard.OnDeal = true;
            _context.SaveChanges();
        }
        
        [NonAction]
        public async Task RemoveOnDeal(long UserCardId)
        {
            var usercard = await _context.UserCard.SingleOrDefaultAsync(uc => uc.UserCardId == UserCardId);
            usercard.OnDeal = false;
            _context.SaveChanges();
        }

        [NonAction]
        public async Task ChangeOwner(long UserCardId, long newOwnerId)
        {
            var usercard = await _context.UserCard.SingleOrDefaultAsync(uc => uc.UserCardId == UserCardId);
            usercard.UserId = newOwnerId;
            usercard.OnDeal = false;
            _context.SaveChanges();
        }
    }
}