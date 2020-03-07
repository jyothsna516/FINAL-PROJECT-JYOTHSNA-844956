using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
namespace EMart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EBuyDBContext _context;
        public SellerRepository(EBuyDBContext context)
        {
            _context = context;
        }
        public void EditProfile(Seller seller)
        {
            _context.Seller.Update(seller);
            _context.SaveChanges();

        }

        public Seller GetProfile(Seller id)
        {
            return _context.Seller.Find(id);
           
        }
    }
}
