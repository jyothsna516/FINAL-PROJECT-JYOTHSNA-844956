using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public  SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetProfile")]
        public IActionResult GetProfile(Seller seller)
        {
            try
            {
                return Ok(_repo.GetProfile(seller));
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]

        public IActionResult  EditProfile(Seller seller)
        {
            try
            {
                _repo.EditProfile(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}