using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Dto;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BE.InterfaceController
{
    public interface ICardController
    {
        Task<ActionResult<List<CardSearchOutputDto>>> SearchCard(CardSearchInputDto input);
        Task<ActionResult<List<CardType>>> GetCardType();
        Task<ActionResult<List<CardOrigin>>> GetCardOrigin();
        Task<ActionResult<List<CardElement>>> GetCardElement();
        Task<ActionResult<List<CardRarity>>> GetCardRarity();
    }
}