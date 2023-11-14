using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class UserCard
    {
        public long UserCardId { get; set; }
        public long UserId { get; set; }
        public long CardId { get; set; }
        public bool OnDeal { get; set; }
    }
}