using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistoryTransactions = new HashSet<PurchaseHistoryTransactions>();
        }

        public string ItemId { get; set; }
        public string CategoryId { get; set; }
        public string SubcategoryId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }
        public string SellerId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<PurchaseHistoryTransactions> PurchaseHistoryTransactions { get; set; }
    }
}
