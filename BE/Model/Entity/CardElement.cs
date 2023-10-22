using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class CardElement
    {
        [Key] public string CardElementName { get; set; }
    }
}