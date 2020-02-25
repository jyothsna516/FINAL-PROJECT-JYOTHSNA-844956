using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.UserService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.UserService.Models;

namespace EMart.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public  UserController(IUserRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("blogin/{uname}/{pwd}")]
      public  IActionResult BuyerLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.BuyerLogin(uname,pwd));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);

            }

        }
        [HttpGet]
        [Route("slogin/{uname}/{pwd}")]
        public IActionResult SellerLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.SellerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);

            }

        }
        [HttpPost]
        [Route("BRegister")]
        public IActionResult BuyerRegister(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);

            }

        }
        [HttpPost]
        [Route("SRegister")]
        public IActionResult SellerRegister(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);

            }

        }
    }
}