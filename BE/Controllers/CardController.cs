using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.InterfaceController;
using BE.Model.Dto;
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
        public ActionResult<List<Card>> searchCard([FromQuery]CardSearchInputDto input)
        {
            var card = from Card in _context.Card 
            where (string.IsNullOrWhiteSpace(input.CardName) || Card.CardName.Contains(input.CardName))
            && (string.IsNullOrWhiteSpace(input.CardTypeName) || Card.CardTypeName == input.CardTypeName)
            && (string.IsNullOrWhiteSpace(input.CardOriginName) || Card.CardOriginName == input.CardOriginName)
            && (string.IsNullOrWhiteSpace(input.CardElementName) || Card.CardElementName == input.CardElementName)
            && (string.IsNullOrWhiteSpace(input.CardRarityName) || Card.CardRarityName == input.CardRarityName)
            select Card;
            return card.ToList();
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