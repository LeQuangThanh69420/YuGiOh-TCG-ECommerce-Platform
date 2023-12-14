using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Dto;
using Microsoft.AspNetCore.Mvc;

namespace BE.InterfaceController
{
    public interface IDealController
    {
        //[HttpGet("SearchDeal")]
        Task<ActionResult<List<DealSearchOutputDto>>> SearchDeal(DealSearchInputDto input, bool sortByTime, bool sortByRarity, bool sortByPrice, bool sortAscending);

        //[Authorize]
        //[HttpGet("GetBoughtDeal")]
        Task<ActionResult<List<DealGetBuyedOutputDto>>> GetBoughtDeal(string Username);

        //[Authorize]
        //[HttpGet("GetSoldDeal")]
        Task<ActionResult<List<DealGetSelledOutputDto>>> GetSoldDeal(string Username);
    
        //[Authorize]
        //[HttpPost("CreateDeal")]
        Task<ActionResult> CreateDeal(DealCreateInputDto input);

        //[Authorize]
        //[HttpPut("EditDeal")]
        Task<ActionResult> EditDeal(DealEditInputDto input);
        
        //[Authorize]
        //[HttpDelete("DeleteDeal")]
        Task<ActionResult> DeleteDeal(DealDeleteInputDto input);

        //[Authorize]
        //[HttpPost("AcceptDeal")]
        Task<ActionResult> AcceptDeal(DealAcceptInputDto input);
    }
}