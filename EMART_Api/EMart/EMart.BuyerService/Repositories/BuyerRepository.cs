using EMart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EBuyDBContext _context;
        public BuyerRepository(EBuyDBContext context)
        {
            _context = context;
        }


        public void BuyItem(PurchaseHistoryTransactions item)
        {
            _context.Add(item);
            _context.SaveChanges();

        }

        public void EditProfile(Buyer buyer)
        {
            _context.Update(buyer);
            _context.SaveChanges();
            
        }

        public Buyer GetProfile(string bid)
        {
            // return _context.Buyer.Find(bid);
            return _context.Buyer.SingleOrDefault(e => e.BuyerId == bid);
        }

        public List<PurchaseHistoryTransactions> PurchaseHistoryTransactions(string bid)
        {
            return _context.PurchaseHistoryTransactions.Where(e => e.BuyerId== bid).ToList();
        }

        public List<Items> SearchItems(string name)
        {
            return _context.Items.Where(e=> e.ItemName==name).ToList();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories(string cid)
        {
           // List<SubCategory> subcategory=_context.SubCategory.Where(e=>e.)
            return _context.SubCategory.ToList();
        }
        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }
        public void AddToCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }
        public List<Cart> GetCartItems(string bid)
        {
            //return _context.Cart.Add

            return _context.Cart.Where(e => e.BuyerId == bid).ToList();
        }
        public void DeleteCartItems(string Cartid)
        {
            Cart cart = _context.Cart.Find(Cartid);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }
        public Cart GetCartId(string cartid)
        {
            return _context.Cart.Find(cartid);
        }
    }
}
