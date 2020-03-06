using EMart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> SearchItems(string name);
        void BuyItem(PurchaseHistoryTransactions item );
        void EditProfile(Buyer buyer);
        Buyer GetProfile(string bid);
        List<PurchaseHistoryTransactions> PurchaseHistoryTransactions(string bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string cid);
        List<Items> GetAllItems();
    }
}
