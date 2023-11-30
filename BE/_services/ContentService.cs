using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace BE._services
{
    public class ContentService : BaseApiController
    {
        [NonAction]
        public async Task<ActionResult> ContentWrite(string message)
        {
            return Content(
                "<head>" + 
                    "<script src='/assets/live2d/live2d.min.js'></script>" + 
                    "<script src='/assets/live2d/live2djs.js'></script>" + 
                    "<link rel='stylesheet' href='/assets/live2d/live2d.css'>" + 
                "</head>" + 
                "<body>" + 
                    "<h1 style='color:red;'>" + message + "</h1>" + 
                    "<canvas id='live2d' width='560' height='600' class='live2d' style='position: absolute; bottom: 0px; left: 30%; width: 30%;'></canvas>" +
                "</body>", 
            "text/html");
        }
    }
}