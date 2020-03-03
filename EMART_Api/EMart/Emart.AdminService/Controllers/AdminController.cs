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
        [HttpGet]
        [Route("ViewCategory")]
        public IActionResult ViewCategory()
        {
            try
            {
                // _repo.ViewCategory();
                return Ok( _repo.ViewCategory());
             //   return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("ViewSubCategory")]
        public IActionResult ViewSubCategory()
        {
            try
            {
                // _repo.ViewCategory();
                return Ok(_repo.ViewSubCategory());
                //   return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
    }
        [HttpDelete]
        [Route("DeleteCategory/{categoryId}")]
        public IActionResult DeleteCategory(string categoryId)
        {
            try
            {
                // _repo.ViewCategory();
                _repo.DeleteCategory(categoryId);
                 return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCategory/{SubCategoryId}")]
        public IActionResult DeleteSubCategory(string SubCategoryId)
        {
            try
            {
                // _repo.ViewCategory();
                _repo.DeleteCategory(SubCategoryId);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getcategory")]
        public IActionResult Getcategory()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

    }



}




    