using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BE.InterfaceController
{
    public interface ICardController
    {
        ActionResult<List<Card>> searchCard();
    }
}