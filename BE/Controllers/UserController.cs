using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.InterfaceController;

namespace BE.Controllers
{
    public class UserController : IUserController
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }
    }
}