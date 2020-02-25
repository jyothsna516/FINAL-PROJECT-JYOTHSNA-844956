using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
namespace EMart.SellerService.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly EBuyDBContext _context;
        public ItemRepository(EBuyDBContext context)
        {
            _context = context;
        }
        public void AddItem(Items item)
        {
            _context.Items.Add(item);
            _context.SaveChanges();
          
        }

        public void Deleteitem(string itemid)
        {
            Items item = _context.Items.Find(itemid);
            _context.Remove(itemid);
            _context.SaveChanges();
        }

        public Items GetItem(string itemid)
        {
            return _context.Items.Find(itemid);
            
        }

        public void UpdateItem(Items obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(string sid)
        {
            return _context.Items.ToList();
            
        }
    }
}
