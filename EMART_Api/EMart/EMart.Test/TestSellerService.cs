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
            _repo = new SellerRepository(new EMart.SellerService.Models.EBuyDBContext());
        }
        [Test]
        [Description("get profile of the seller based on id")]
        public void GetProfile()
        {
           // var result =_repo.GetProfile()
           // Assert.IsNotNull(result);
        }

    }
}
