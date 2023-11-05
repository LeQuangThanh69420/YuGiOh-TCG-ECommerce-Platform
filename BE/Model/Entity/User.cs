using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class User
    {
        public long UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int Money { get; set; }
        public bool Actived { get; set; }
        public int? ActiveCode { get; set; }
        public string AvatarUrl { get; set; }
    }
}