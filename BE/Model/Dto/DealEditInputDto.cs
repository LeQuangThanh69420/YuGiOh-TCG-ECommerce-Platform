using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class DealEditInputDto
    {
        [Required] public long DealId { get; set; }
        [Required] public long UserCardId { get; set; }
        [Required] public int Price { get; set; }
    }
}