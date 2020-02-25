using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.SellerService.Repositories;

namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public IActionResult AddItem(Items item)
        {
            try
            {
                _repo.AddItem(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public IActionResult DeleteItem(string itemid)
        {
            try
            {
               _repo.Deleteitem(itemid);
                return Ok();
               
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Getitem/{itemid}")]
        public IActionResult GetItem(string itemid)
        {
            try
            {
               
                return Ok(_repo.GetItem(itemid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updateitem")]
        public IActionResult UpdateItem(Items obj)
        {
            try
            {
                _repo.UpdateItem(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetAll/{sid}")]
        public IActionResult ViewItems(string sid)
        {
            try
            {
                return Ok( _repo.ViewItems(sid));
                
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }

    }
}