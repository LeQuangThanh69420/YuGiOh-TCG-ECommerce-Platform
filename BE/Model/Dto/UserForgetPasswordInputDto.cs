using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserForgetPasswordInputDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
    }
}