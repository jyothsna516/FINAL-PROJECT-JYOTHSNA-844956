using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistoryTransactions = new HashSet<PurchaseHistoryTransactions>();
        }

        public string BuyerId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public string Mobileno { get; set; }
        public DateTime Createddatetime { get; set; }

        public virtual ICollection<PurchaseHistoryTransactions> PurchaseHistoryTransactions { get; set; }
    }
}
