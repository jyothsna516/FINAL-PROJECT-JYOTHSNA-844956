﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserService
{
    public class Token
    {
        public string username { get; set; }
        public string token { get; set; }
    //    public string BuyerId{ get; set; }
        public string SellerId { get; set; }
        public string BuyerId { get; set; }
        public string msg { get; set; }
    }
}