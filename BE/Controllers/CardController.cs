using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.InterfaceController;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class CardController : BaseApiController, ICardController
    {
        private readonly DataContext _context;
        public CardController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("searchCard")]
        public ActionResult<List<Card>> searchCard()
        {
            return _context.Card.ToList();
        }
    }
}