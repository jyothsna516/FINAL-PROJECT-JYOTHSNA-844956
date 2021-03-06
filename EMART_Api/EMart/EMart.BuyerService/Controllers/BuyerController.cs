﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EMart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistoryTransactions item)
        {
            try
            {
               _repo.BuyItem(item);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.EditProfile(buyer);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("GetProfile/{bid}")]
        public IActionResult GetProfile(string bid)
        {
            try
            {
                return Ok(_repo.GetProfile(bid));
               

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("PHistory/{bid}")]
        public IActionResult PurchaseHistoryTransactions(string bid)
        {
            try
            {
                return Ok( _repo.PurchaseHistoryTransactions(bid));
                

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Search/{name}")]
        public IActionResult SearchItems(string name)
        {
            try
            {
               
                return Ok(_repo.SearchItems(name));

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("categorey")]
        public IActionResult GetCategories()
        {
            try
            {
                
                return Ok(_repo.GetCategories());

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("subcategorey/{cid}")]
        public IActionResult GetSubCategories(string cid)
        {
            try
            {
                
                return Ok(_repo.GetSubCategories(cid));

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getallitems")]
        public IActionResult GetAllItems()
        {
            try
            {
                return Ok(_repo.GetAllItems());

            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("Addtocart")]
        public IActionResult AddToCart(Cart cart)
        {
            try
            {
                _repo.AddToCart(cart);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getcartitems/{bid}")]
        public IActionResult GetCartItems(string bid)
        {
            try
            {
                return Ok(_repo.GetCartItems(bid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("Removeitem/{Cartid}")]
        public IActionResult DeleteCartItem(string Cartid)
        {
            try
            {
                _repo.DeleteCartItems(Cartid);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCartId/{bid}")]
        public IActionResult GetCartById(string cartid)
        {
            try
            {
                return Ok(_repo.GetCartId(cartid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }


    }
}



   