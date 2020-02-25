using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategory(category);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategory(subcategory);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
    }
}

    