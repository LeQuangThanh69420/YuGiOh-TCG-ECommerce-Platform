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

        [HttpGet("getCardType")]
        public ActionResult<List<CardType>> getCardType()
        {
            return _context.CardType.ToList();
        }

        [HttpGet("getCardOrigin")]
        public ActionResult<List<CardOrigin>> getCardOrigin()
        {
            return _context.CardOrigin.ToList();
        }

        [HttpGet("getCardElement")]
        public ActionResult<List<CardElement>> getCardElement()
        {
            return _context.CardElement.ToList();
        }
        
        [HttpGet("getCardRarity")]
        public ActionResult<List<CardRarity>> getCardRarity()
        {
            return _context.CardRarity.ToList();
        }
    }
}