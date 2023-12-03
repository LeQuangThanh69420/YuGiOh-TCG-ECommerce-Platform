using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE._iservices
{
    public interface IContentService
    {
        Task<string> ContentWrite(string message);
    }
}