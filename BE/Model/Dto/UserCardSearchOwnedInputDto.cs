using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserCardSearchOwnedInputDto
    {
        [Required] public string Username { get; set; }
        public string? CardName { get; set; }
        public string? CardTypeName { get; set; }
        public string? CardOriginName { get; set; }
        public string? CardElementName { get; set; }
        public string? CardRarityName { get; set; }
    }
}