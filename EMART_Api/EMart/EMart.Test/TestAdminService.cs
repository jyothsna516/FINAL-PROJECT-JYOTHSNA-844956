using Emart.AdminService.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Models;
namespace EMart.Test
{
    [TestFixture]
   public  class TestAdminService
    {

        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new Emart.AdminService.Models.EBuyDBContext());
        }
        [Test]
        [Description("Adding category of products")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId = "C0010",
                CategoryName = "Furniture",
                BreifDetails = "resonableprice",
            });
            var result = _repo.ViewCategory();
            Assert.NotNull(result);

        }
        [Test]
        [Description("Adding SubCategory Based on category")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubcategoryId = "Sc08",
                SubcategoryName = "dinnning table",
                CategoryId = "C0010",
                BreifDetails = "somanymodels",
                Gst =44,
            });
            var result = _repo.ViewSubCategory();
            Assert.NotNull(result);
        }
        [Test]
        [Description("deleting products based on category")]
        public void DeleteCategory()
        {
            _repo.DeleteCategory("C0010");
            var result = _repo.GetCatById("C0010");
            Assert.Null(result);
        }
        [Test]
        [Description("deleting products based on subcategory")]
        public void DeleteSubCategory()
        {
            _repo.DeleteSubCategory("sc02");
            var result = _repo.GetScatById("sc02");
            Assert.Null(result);
        }
        [Test]
        public void EditCategory()
        {
            Category  category =_repo.GetCatById("C0003");
               category.CategoryName="electronics";
            _repo.EditCategory(category);
            Category item1 = _repo.GetCatById("C0003");
            Assert.AreSame(category, item1);

        }
        [Test]
        public void EditSubCategory()
        {
            SubCategory scategory = _repo.GetScatById("sc03");
            scategory.SubcategoryName = "mensclothing";
            _repo.EditSubCategory(scategory);
           SubCategory item1 = _repo.GetScatById("sc03");
            Assert.AreSame(scategory, item1);

        }


    }
}
