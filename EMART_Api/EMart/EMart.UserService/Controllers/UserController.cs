using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.UserService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.UserService.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace EMart.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IConfiguration configuration;
        public UserController(IUserRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;
        }
      //  private readonly IUserRepository _repo;
       // private object configuration;

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

        private Token GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                username = username,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return response;
        }
    }
}