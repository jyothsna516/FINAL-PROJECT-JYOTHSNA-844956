using System;
using System.Collections.Generic;
using System.Text;
using EMart.UserService.Models;
using EMart.UserService.Repositories;
using NUnit.Framework;
//using UserService.Models;
namespace EMart.Test
{
   public class TestUserService
    {
        UserRepositry _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new UserRepositry(new EBuyDBContext());
        }
        [Test]
        [Description("Buyer Register method")]
        public void TestBuyerSignup()
        {
            _repo.BuyerRegister(new Buyer()
            {
                BuyerId = "I0012",
                Username = "Renukako",
                Password = "renu575",
                Emailid = "renu@gmail.com",
                Mobileno = "7854759871",
                Createddatetime = DateTime.Now

            });
            var result =_repo.BuyerLogin("Renukako","renu575");
            Assert.NotNull(result);
        }
        [Test]
        [Description("Seller Register method")]
        public void TestSellerSignUp()
        {
            _repo.SellerRegister(new Seller()
            {
                SellerId = "S007",

                Username = "Renukak",

                Password = "renu1234",

                Companyname = "renuka textiles",

                Gstin = "7678",

                PostalAddress = "atali",

                Website = "renu.com",

                Emailid = "renu@gmail.com",

                ContactNumber = "6785797981",

                BriefAboutcompany = "superquality"
            });
            var result = _repo.SellerLogin("Renukak", "renu1234");
            Assert.NotNull(result);
        }


    }
}
