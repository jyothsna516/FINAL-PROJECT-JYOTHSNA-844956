using System;
using System.Collections.Generic;
using System.Text;
using EMart.BuyerService.Repositories;
using EMart.BuyerService.Models;
using NUnit.Framework;
namespace EMart.Test
{
   public class TestBuyerService
    {

        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EBuyDBContext());
        }
        [Test]
        [Description("buy item")]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistoryTransactions()
            {
                Id = "T0002",
                SellerId = "S0001",
                BuyerId="I0004",
                Transactiontype = "debit",
                Numberofitems = 4,
                Datetime=DateTime.Now,
                 Remarks="no",
           TranscationStatus="oncart",
                ItemId = "I431",
            }); ; 
            var result = _repo.PurchaseHistoryTransactions("I0004");
            Assert.NotNull(result);
        }
        [Test]
        [Description("SEARCH ITEM")]
        public void TestSearchItems()
        {
            var result = _repo.SearchItems("fasttrack");
            Assert.IsNotNull(result);
            Assert.GreaterOrEqual(result.Count, 0);
        }
        [Test]
        [Description("Test GetCategory/GetSubCategory")]
        public void TestGetCategorySubCategory()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
            var result1 = _repo.GetSubCategories("SC06");
            Assert.IsNotNull(result1);
        }
        [Test]
        [Description("Test GetAllItems()")]
        public void GetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test View/Edit Profile")]
        public void TestUpdateProfile()
        {
            Buyer buyer = _repo.GetProfile("I0001");
            buyer.Mobileno = "9666666889";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetProfile("I0001");
            Assert.AreSame(buyer, buyer1);
        }
        

    }
}
