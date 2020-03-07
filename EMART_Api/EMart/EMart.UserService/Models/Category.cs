﻿using System;
using System.Collections.Generic;

namespace EMart.UserService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string BreifDetails { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}