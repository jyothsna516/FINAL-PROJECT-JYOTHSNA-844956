using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class PurchaseHistoryTransactions
    {
        public string Id { get; set; }
        public string BuyerId { get; set; }
        public string SellerId { get; set; }
        public string Transactiontype { get; set; }
        public string ItemId { get; set; }
        public int Numberofitems { get; set; }
        public DateTime Datetime { get; set; }
        public string Remarks { get; set; }
        public string TranscationStatus { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
