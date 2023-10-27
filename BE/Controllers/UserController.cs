using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using BE.Context;
using BE.InterfaceController;
using BE.Model.Dto;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    public class UserController : BaseApiController, IUserController
    {
        private readonly DataContext _context;
        private readonly EmailController _email;
        public UserController(DataContext context, EmailController email)
        {
            _context = context;
            _email = email;
        }

        private async Task<bool> UserExists(string Username)
        {
            return await _context.User.AnyAsync(x => x.Username == Username.ToLower());
        }
        private async Task<bool> EmailExists(string Email)
        {
            return await _context.User.AnyAsync(x => x.Email == Email.ToLower());
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(UserRegisterInputDto input)
        {
            if (await UserExists(input.Username))
            {
                return BadRequest("Ten tai khoan da co nguoi dung.");
            }
            if (await EmailExists(input.Email))
            {
                return BadRequest("Email da co nguoi dung.");
            }
            var activeCode = new Random().Next(1000, 9999);
            var rs = await _email.SendEmail(new EmailModel()
            {
                To = input.Email,
                Subject = "Kich hoat tai khoan YuGhiOh TCG",
                Body = "Bấm vào liên kết để kích hoạt tài khoản http://localhost:5233/api/User/ActiveUser" + "/" + input.Username + "/" + activeCode,
            });
            if ((int)rs.GetType().GetProperty("StatusCode").GetValue(rs, null) == 200)
            {
                var newUser = new User()
                {
                    Username = input.Username.ToLower(),
                    Password = input.Password,
                    Email = input.Email,
                    Money = 0,
                    Actived = false,
                    ActiveCode = activeCode,
                };
                _context.User.Add(newUser);
                await _context.SaveChangesAsync();
            }
            return rs;
        }

        [HttpGet("ActiveUser/{username}/{activeCode}")]
        public async Task<ActionResult> ActiveUser(string username, int activeCode)
        {
            var user = await _context.User.SingleOrDefaultAsync(u => u.Username == username);
            if (user.ActiveCode == activeCode)
            {
                user.Actived = true;
                user.ActiveCode = null;
                await _context.SaveChangesAsync();
                return Ok("Kich hoat thanh cong");
            }
            else return NotFound("URL khong ton tai");
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginOutputDto>> Login(UserLoginInputDto input)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Username == input.Username);
            if (user == null) return Unauthorized("tk ko ton tai");
            if (input.Password != user.Password) return Unauthorized("Sai mk");
            if (user.Actived != true) return Unauthorized("chua dc kick hoat");
            else return Ok(new UserLoginOutputDto()
            {
                Username = user.Username,
                Token = "daylatoken",
            });
        }

        /*[HttpPost("ForgetPassword")]
        public async Task<ActionResult> ForgetPassword()
        {
            return Ok();
        }*/

    }
}