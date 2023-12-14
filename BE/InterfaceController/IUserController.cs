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
        //[HttpPost("Register")]
        Task<ActionResult> Register(UserRegisterInputDto input);
        
        //[HttpGet("ActiveUser/{username}/{activeCode}")]
        Task<ActionResult> ActiveUser(string username, int activeCode);
        
        //[HttpPost("Login")]
        Task<ActionResult<UserLoginOutputDto>> Login(UserLoginInputDto input);
        
        //[HttpPost("ForgetPassword")]
        Task<ActionResult> ForgetPassword(UserForgetPasswordInputDto input);
        
        //[Authorize]
        //[HttpPost("ChangePassword")]
        Task<ActionResult> ChangePassword(UserChangePasswordInputDto input);
        
        //[Authorize]
        //[HttpPost("ChangeEmail")]
        Task<ActionResult> ChangeEmail(UserChangeEmailInputDto input);

        //[Authorize]
        //[HttpPost("ChangeAvatarUrl")]
        Task<ActionResult> ChangeAvatarUrl(UserChangeAvatarUrlInputDto input);

        //[Authorize]
        //[HttpGet("GetInfo")]
        Task<ActionResult> GetInfo(string Username);
    }
}