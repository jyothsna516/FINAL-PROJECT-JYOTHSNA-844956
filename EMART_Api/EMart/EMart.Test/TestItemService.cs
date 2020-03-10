using System;
using System.Collections.Generic;
using System.Text;

using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
using NUnit.Framework;
namespace EMart.Test
{
    [TestFixture]
    class TestItemService
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new SellerService.Models.EBuyDBContext());
        }
        [Test]
        [Description("test add items")]
        public void AddItem()
        {
            _repo.AddItem(new Items()
            {
                ItemId = "I0017",
                CategoryId = "C0006",
                SubcategoryId = "SC05",
                Price = 755,
                ItemName = "ghgfhh",
                Description = "nices",
                StockNumber = 746,
                Remarks = "no",
                SellerId = "S0002",
                Photo = "image3.jpg"
            });
            var result = _repo.GetItem("I0016");
            Assert.Null(result);
        }

        [Test]
        [Description("test delete item ")]
        public void TestDeleteItem()
        {
            _repo.Deleteitem("I0012");
            var result = _repo.GetItem("I0012");
            Assert.Null(result);

        }

        [Test]
        [Description("test update item")]
        public void TestUpdateItem()
        {
           Items item = _repo.GetItem("I488");
            item.ItemName = "dress";
            _repo.UpdateItem(item);
            Items item1 = _repo.GetItem("I488");
            Assert.AreSame(item, item1);
        }
        [Test]
        [Description("test get category wise")]
        public void TestGetCategory()
        {

            var result = _repo.GetCategory();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("test view subcategory")]
        public void TestGetSubCategory()
        {

            var result = _repo.GetSubCagegory("C0006");
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);

        }
        [Test]
        [Description("test view category")]
        public void TestViewCategory()
        {

            var result = _repo.ViewItems("S0002");
            Assert.NotNull(result);
        }

    }
}
