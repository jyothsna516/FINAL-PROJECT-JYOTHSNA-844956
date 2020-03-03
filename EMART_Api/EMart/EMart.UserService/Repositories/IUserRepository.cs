using EMart.UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserService.Repositories
{
    public interface IUserRepository
    {
       public string BuyerLogin(string uname, string pwd);
       public string SellerLogin(string uname, string pwd);
        void BuyerRegister(Buyer buyer);
        void SellerRegister(Seller seller);

    }
}
