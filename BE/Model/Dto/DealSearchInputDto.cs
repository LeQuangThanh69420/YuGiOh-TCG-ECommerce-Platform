using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class DealSearchInputDto
    {
        public string? MyUsername { get; set; }
        public string? SellUsername { get; set; }
        public string? CardName { get; set; }
        public string? CardTypeName { get; set; }
        public string? CardOriginName { get; set; }
        public string? CardElementName { get; set; }
        public string? CardRarityName { get; set; }
        public int? PriceFrom { get; set; }
        public int? PriceTo { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
    }
}