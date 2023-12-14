using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Entity;

namespace BE._iservices
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}