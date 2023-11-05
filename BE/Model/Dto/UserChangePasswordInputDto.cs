using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserChangePasswordInputDto
    {
        public string Username { get; set; }
        [StringLength(10, MinimumLength = 6)] public string NewPassword { get; set; }
    }
}