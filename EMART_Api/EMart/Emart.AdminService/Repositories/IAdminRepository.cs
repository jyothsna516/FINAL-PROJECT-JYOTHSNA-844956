using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
   public interface IAdminRepository
    {
        void AddCategory(Category category);
        void AddSubCategory(SubCategory subcategory);
        List<Category> ViewCategory();
        List<SubCategory> ViewSubCategory();
        void DeleteCategory(string categoryId);
        void DeleteSubCategory(string SubCategoryId);
        List<Category> GetCategory();

        // Category ViewCategory(Category catid);
        //  SubCategory  ViewSubCategory(SubCategory scatid);

    }
}
