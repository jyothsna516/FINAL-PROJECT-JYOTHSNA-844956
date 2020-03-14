import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Cart } from 'src/app/Models/cart';
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  // cartlist:Cart;
  // item:Items[];

  // constructor(private route:Router,private service:BuyerService) {
  //   let bid=localStorage.getItem('bid'); 
  //   this.service.GetCartItems().subscribe(res=>{
  //     this.cartlist=res;
  //     console.log(this.cartlist);
  //   })
  // }

  // ngOnInit() {
  // }
  // Buynow(item1:Items)
  // {
  //   console.log(item1);
  //   localStorage.setItem('item1',JSON.stringify(this.item));
  //   this.route.navigateByUrl('buyproduct');
  // }
  // Remove(cartid:string)
  // {
  //   console.log(cartid);
  //   this.service.RemoveCartItem(cartid).subscribe(res=>{
  //     console.log('item removed from cart');
  //     alert('Item removed from cart');
  //   })
  // }
  item:Items
viewForm:FormGroup;
buyerid:string;
cart:Cart;
cartlist:Cart[];
  constructor(private builder:FormBuilder,private service:BuyerService,private route:Router) { 
    this.buyerid= localStorage.getItem('buyerid');
    console.log(this.buyerid);
    this.service.GetCartItems(this.buyerid).subscribe(res=>
      {
        this.cartlist=res;
        console.log(this.cartlist)
      },
      err=>{
        console.log(err);
      })
  
     }
  
  


  ngOnInit() 
  {
   
  
     }

  // if(localStorage.getItem('buyerid'))
  // {
  //   let bid=localStorage.getItem('buyerid');
  //   this.service.GetCount(bid).subscribe(res=>{
  //     this.count=res;
  //   })
  

//   Buy(item:Items){
//     console.log(item);
//     this.item=item;
//     localStorage.setItem('item',JSON.stringify(this.item));
//     this.route.navigateByUrl('/buyer/buyproduct');
// }


  Delete(id:string)
  {
     console.log(id);
     this.service.RemoveCartItem(id).subscribe(
      res=>{
      console.log("Deleted from cart");
      alert('Deleted from cart');
    },
    err=>
    {
      console.log(err);
    }
    )
   }

}
