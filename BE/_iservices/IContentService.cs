using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Entity;

namespace BE._iservices
{
    public interface IContentService
    {
        Task<string> ContentWrite(string message, string messageImage);
        Task<string> PriceChartWrite(List<Deal> deals);
    }
}