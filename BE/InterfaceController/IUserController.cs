using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Dto;
using Microsoft.AspNetCore.Mvc;

namespace BE.InterfaceController
{
    public interface IUserController
    {
        Task<ActionResult> Register(UserRegisterInputDto input);
        Task<ActionResult> ActiveUser(string username, int activeCode);
        Task<ActionResult<UserLoginOutputDto>> Login(UserLoginInputDto input);
    }
}