using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Dto;
using Microsoft.AspNetCore.Mvc;

namespace BE.InterfaceController
{
    public interface IUserCardController
    {
        //[Authorize]
        //[HttpGet("SearchOwnedSeparate")]
        Task<ActionResult<List<UserCardSearchOwnedOutputDto>>> SearchOwnedSeparate(UserCardSearchOwnedInputDto input);

        //[Authorize]
        //[HttpGet("SearchOwnedStack")]
        Task<ActionResult<List<UserCardSearchOwnedOutputDto>>> SearchOwnedStack(UserCardSearchOwnedInputDto input);

        //[NonAction]
        Task MakeOnDeal(long UserCardId);

        //[NonAction]
        Task RemoveOnDeal(long UserCardId);

        //[NonAction]
        Task ChangeOwner(long UserCardId, long newOwnerId);
    }
}