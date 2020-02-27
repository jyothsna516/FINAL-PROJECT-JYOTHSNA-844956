using System;
using System.Collections.Generic;

namespace EMart.UserService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistoryTransactions = new HashSet<PurchaseHistoryTransactions>();
        }

        public string SellerId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public string Gstin { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string ContactNumber { get; set; }
        public string BriefAboutcompany { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistoryTransactions> PurchaseHistoryTransactions { get; set; }
    }
}
