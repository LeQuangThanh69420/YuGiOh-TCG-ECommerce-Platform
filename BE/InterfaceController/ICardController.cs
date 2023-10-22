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
        Task<ActionResult<List<CardSearchOutputDto>>> searchCard(CardSearchInputDto input);
        Task<ActionResult<List<CardType>>> getCardType();
        Task<ActionResult<List<CardOrigin>>> getCardOrigin();
        Task<ActionResult<List<CardElement>>> getCardElement();
        Task<ActionResult<List<CardRarity>>> getCardRarity();
    }
}