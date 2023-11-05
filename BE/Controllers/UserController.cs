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
        public async Task<ActionResult> Register([FromBody] UserRegisterInputDto input)
        {
            if (await UserExists(input.Username))
            {
                return BadRequest("Tên tài khoản đã có người sử dụng!");
            }
            if (await EmailExists(input.Email))
            {
                return BadRequest("Email đã có người sử dụng!");
            }
            var activeCode = new Random().Next(1000, 9999);
            var rs = await _email.SendEmail(new EmailModel()
            {
                To = input.Email,
                Subject = "Kích hoạt tài khoản YuGhiOh TCG",
                Body = "<h3>Bấm nút để kích hoạt</h3><a href='http://localhost:5233/api/User/ActiveUser" + "/" + input.Username + "/" + activeCode + "'><button style='width: 200px; height: 40px; background-color: #008cff; color: white; border-radius: 6px; border: none;'>Bấm tôi</button></a>",
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
                    AvatarUrl = "https://res.cloudinary.com/dslzbnfu8/image/upload/v1699185130/samples/DuRiu.png",
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
            if (user == null) return Unauthorized("URL không tồn tại!");
            if (user.ActiveCode == activeCode)
            {
                user.Actived = true;
                user.ActiveCode = null;
                await _context.SaveChangesAsync();
                return Ok("Kích hoạt tài khoản thành công!");
            }
            else return NotFound("URL không tồn tại!");
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginOutputDto>> Login([FromBody] UserLoginInputDto input)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Username == input.Username);
            if (user == null) return Unauthorized("Tài khoản không tồn tại!");
            if (input.Password != user.Password) return Unauthorized("Sai mật khẩu, vui lòng kiểm tra lại!");
            if (user.Actived != true) return Unauthorized("Tài khoản chưa kích hoạt, vui lòng kiểm tra Email!");
            else return Ok(new UserLoginOutputDto()
            {
                Username = user.Username,
                Token = "daylatoken",
            });
        }

        [HttpPost("ForgetPassword")]
        public async Task<ActionResult> ForgetPassword([FromBody] UserForgetPasswordInputDto input)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Username == input.Username);
            if (user == null) return Unauthorized("Tài khoản không tồn tại!");
            if (user.Email != input.Email) return Unauthorized("Email không đúng");
            else
            {
                return await _email.SendEmail(new EmailModel()
                {
                    To = user.Email,
                    Subject = "Mật khẩu gửi lại!",
                    Body = "<h3>Vui lòng không chia sẻ mật khẩu cho bất kỳ ai, kể cả ADMIN!</h3><h3>Mật khẩu của bạn là:</h3>" + user.Password,
                });
            }
        }

        [HttpPost("ChangePassword")]
        public async Task<ActionResult<long>> ChangePassword([FromBody] UserChangePasswordInputDto input)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Username == input.Username);
            if (user == null) return Unauthorized("Tài khoản không tồn tại!");
            else
            {
                user.Password = input.NewPassword;
                await _context.SaveChangesAsync();
                return Ok("Thay đổi mật khẩu thành công");
            }
        }
    }
}