using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserRegisterInputDto
    {
        [Required][StringLength(20, MinimumLength = 6)] public string Username { get; set; }
        [Required][StringLength(10, MinimumLength = 6)] public string Password { get; set; }
        [Required][StringLength(10)] public string Email { get; set; }
    }
}