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
    }
}
