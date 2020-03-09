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
                return Ok(_repo.ViewCategory());
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
        [Route("DeleteSubCategory/{subcategoryId}")]
        public IActionResult DeleteSubCategory(string subcategoryId)
        {
            try
            {
                // _repo.ViewCategory();
                _repo.DeleteCategory(subcategoryId);
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
        [HttpPut]
        [Route("updatecategory")]
        public IActionResult EditCategory(Category category)
        {
            try
            {
                _repo.EditCategory(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("updatesubcategory")]
        public IActionResult EditSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.EditSubCategory(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }


        [HttpGet]
        [Route("getcbyid/{cid}")]
        public IActionResult GetCatById(string cid)
        {
            try
            {
                _repo.GetCatById(cid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("getsbyid/{cid}")]
        public IActionResult GetScatById(string scid)
        {
            try
            {
                _repo.GetScatById(scid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }



    }
}




    