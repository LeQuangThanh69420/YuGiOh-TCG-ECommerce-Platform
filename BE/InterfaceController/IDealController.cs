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

        //[HttpGet("GetBuyedDeal")]
        Task<ActionResult<List<DealGetBuyedOutputDto>>> GetBuyedDeal(string Username);

        //[HttpGet("GetSelledDeal")]
        Task<ActionResult<List<DealGetSelledOutputDto>>> GetSelledDeal(string Username);
    
        //[HttpPost("CreateDeal")]
        Task<ActionResult> CreateDeal(DealCreateInputDto input);

        //[HttpPut("EditDeal")]
        Task<ActionResult> EditDeal(DealEditInputDto input);
        
        //[HttpDelete("DeleteDeal")]
        Task<ActionResult> DeleteDeal(DealDeleteInputDto input);

        //[HttpPost("AcceptDeal")]
        Task<ActionResult> AcceptDeal(DealAcceptInputDto input);
    }
}