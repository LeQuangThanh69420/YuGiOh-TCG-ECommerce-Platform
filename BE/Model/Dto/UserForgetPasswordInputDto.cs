using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserForgetPasswordInputDto
    {
        [Required] public string Username { get; set; }
        [Required] public string Email { get; set; }
    }
}