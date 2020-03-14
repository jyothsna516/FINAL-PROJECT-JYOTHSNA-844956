using System;
using System.Collections.Generic;
using System.Text;
using EMart.SellerService.Repositories;
using EMart.SellerService.Models;
using NUnit.Framework;
namespace EMart.Test
{
    [TestFixture]
    public class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]

        public void SetUp()
        {
            _repo = new SellerRepository(new EBuyDBContext());
        }
        [Test]
        [Description("Test View/Edit Profile")]
        public void TestUpdateProfile()
        {
            Seller seller = _repo.GetProfile("S0001");
            seller.ContactNumber = "9889489899";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile("S0001");
            Assert.AreSame(seller, seller1);
        }

    }
}

    

