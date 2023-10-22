using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class CardOrigin
    {
        [Key] public string CardOriginName { get; set; }
    }
}