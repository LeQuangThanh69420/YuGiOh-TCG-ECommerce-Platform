using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class DealCreateInputDto
    {
        [Required] public string Username { get; set; }
        [Required] public long UserCardId { get; set; }
        [Required] public int Price { get; set; }
    }
}