using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE._iservices;
using BE.Controllers;
using BE.Model.ValueObject;
using Microsoft.AspNetCore.Mvc;

namespace BE._services
{
    public class ContentService : IContentService
    {
        public async Task<string> ContentWrite(string message, string messageImage)
        {
            return 
                "<head>" + 
                    "<script src='/assets/live2d/live2d.min.js'></script>" + 
                    "<script src='/assets/live2d/live2djs.js'></script>" + 
                    "<link rel='stylesheet' href='/assets/live2d/live2d.css'>" + 
                    "<style>" +
                        "@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500;600;700&display=swap');" +
                        "* {" +
                        "font-family: 'Poppins';" +
                        "box-sizing: border-box;" +
                        "}" +
                    "</style>" +
                "</head>" + 
                "<body>" + 
                    "<h1 style='color:#7400CC;'><img style='width: 35px;' src='" + messageImage + "'>" + message + "</h1>" + 
                    "<a href='" + ApiEnvironment.ClientURL + "'>Go To Home Page</a> | <a href='/assets/gg.html' target='_blank'>Music Player</a><br>" +
                    "<img src='" + ApiEnvironment.imageBubble + "'>" +
                    ApiEnvironment.live2dCanvas +
                "</body>";
        }
    }
}