﻿using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class Discount
    {
        public string Id { get; set; }
        public string DiscountCode { get; set; }
        public double Percentage { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}
