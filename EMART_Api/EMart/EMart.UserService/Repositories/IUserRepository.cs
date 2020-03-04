using EMart.UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserService.Repositories
{
    public interface IUserRepository
    {
       Buyer BuyerLogin(string uname, string pwd);
       Seller SellerLogin(string uname, string pwd);
       public void BuyerRegister(Buyer buyer);
        public void SellerRegister(Seller seller);

    }
}
