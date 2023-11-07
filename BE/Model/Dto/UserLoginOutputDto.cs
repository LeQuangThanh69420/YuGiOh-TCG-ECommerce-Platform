using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserLoginOutputDto
    {
        public string Username { get; set; }
        public string AvaterURL {get; set; }
        public string Token { get; set; }
    }
}