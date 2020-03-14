using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistoryTransactions = new HashSet<PurchaseHistoryTransactions>();
        }

        public string ItemId { get; set; }
        public string CategoryId { get; set; }
        public string SubcategoryId { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public string Remarks { get; set; }
        public string SellerId { get; set; }
        public string Photo { get; set; }
        public string Price { get; set; }
        public string StockNumber { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistoryTransactions> PurchaseHistoryTransactions { get; set; }
    }
}
