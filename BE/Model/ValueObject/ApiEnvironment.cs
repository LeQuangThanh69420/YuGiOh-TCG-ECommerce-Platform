using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.ValueObject
{
    public class ApiEnvironment
    {
        public const string ClientURL = "http://localhost:5173";
        public const int normalPrice = 1000;
        public const int deluxePrice = 5000;
        public const string live2dCanvas = "<canvas id='live2d' width='560' height='600' class='live2d' style='position: absolute; bottom: 0px; left: 30%; width: 30%;'></canvas>";
    }
}