using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.UserService.Models;
namespace EMart.UserService.Repositories
{
    public class UserRepositry : IUserRepository
    {
        private readonly EBuyDBContext _context;
        public UserRepositry(EBuyDBContext context)
        {
            _context = context;
                
        }
        public  string  BuyerLogin(string uname, string pwd)
        {
            var x = _context.Buyer.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
                if (x!=null) {
                return "true";
                
            }
                else {
                return "false";
            }
             
            }
        

        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();

        }

        public string SellerLogin(string uname, string pwd)
        {
            var y = _context.Seller.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
            if (y!= null) { return "true"; }
            else { return "false"; }
        }

        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();

        }
    }
}
