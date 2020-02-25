using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
namespace EMart.SellerService.Repositories
{
   public interface IItemRepository
    {
        void AddItem(Items item);
        List<Items> ViewItems(string sid);
        void Deleteitem(string id);
        void UpdateItem(Items obj);
        Items GetItem(string itemid);
    }
}
