using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class CardType
    {
        [Key] public string CardTypeName { get; set; }
    }
}