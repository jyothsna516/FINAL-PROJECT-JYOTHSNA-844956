using Emart.AdminService.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository: IAdminRepository
    {
        private readonly EBuyDBContext _context;
        public AdminRepository(EBuyDBContext context)
        {
            _context = context;
        }

        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subcategory)
        {
            _context.Add(subcategory);
            _context.SaveChanges();
        }
        public List<Category> ViewCategory()
        {
            return _context.Category.ToList();

        }
        public List<SubCategory> ViewSubCategory()
        {
            return _context.SubCategory.ToList();

        }
        public void DeleteCategory(string categoryId)
        {
          Category  res= _context.Category.Find(categoryId);
            _context.Remove(res);
            _context.SaveChanges();
        }
        public void DeleteSubCategory(string subcategoryId)
        {
            Category res = _context.Category.Find(subcategoryId);
            _context.Remove(res);
            _context.SaveChanges();
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();

        }
        // void ViewSubCategory(SubCategory scatid);
        //  public void DeleteCategory()
    }
}
