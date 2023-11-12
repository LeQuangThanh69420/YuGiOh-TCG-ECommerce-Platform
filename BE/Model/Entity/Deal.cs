using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class Deal
    {
        public long DealId { get; set; }
        public long SellUserId { get; set; }
        public long? BuyUserId { get; set; }
        public long UserCardId { get; set; }
        public int Price { get; set; }
        public DateTime CreateDate { get; set; }
    }
}