using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserRegisterInputDto
    {
        [Required][StringLength(16, MinimumLength = 8)] public string Username { get; set; }
        [Required][StringLength(16, MinimumLength = 8)] public string Password { get; set; }
        [Required][StringLength(50)] public string Email { get; set; }
    }
}