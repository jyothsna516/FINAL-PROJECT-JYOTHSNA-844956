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
            Items item = _context.Items.SingleOrDefault(e=>e.ItemId==itemid);
            _context.Remove(item);
            _context.SaveChanges();
        }

        public Items GetItem(string itemid)
        {

            return _context.Items.SingleOrDefault(e => e.SellerId == itemid);
           
        }

        public void UpdateItem(Items obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(string sid)
        {
            return _context.Items.Where(e => e.SellerId == sid).ToList();
            
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetSubCagegory(string Cid)
        {
            return _context.SubCategory.Where(c => c.CategoryId == Cid).ToList();
        }

    }
}
