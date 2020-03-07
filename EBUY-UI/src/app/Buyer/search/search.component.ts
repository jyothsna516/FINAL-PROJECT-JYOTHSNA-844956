import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { FormGroup } from '@angular/forms';
import { Cart } from 'src/app/Models/cart';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cart:Cart;
  list:Items[];
  item2:Items;
  it:Items;
//name:string;
  constructor(private route:Router,private service:BuyerService) { }

  ngOnInit() {
  }
  Search(itemname:string){
    console.log("search");
    this.service.Search(itemname).subscribe(res=>{
      this.list=res;
      console.log(this.list);
      console.log("items searched suceesfully");}
    )
  }
  // BuyItem(item:Items){
  //   console.log("buyitem");
  //   this.service.BuyItem(item).subscribe(res=>{
  //     this.list=res;
  //     console.log(this.list);
  //   })

  // }
  BuyItem(item:Items)
{
  console.log("hello")
//console.log(item);
localStorage.setItem('item',JSON.stringify(item));
this.route.navigateByUrl('/buyer/buyproduct')
}
AddtoCart(item2:Items){
  console.log(item2);
this.it=item2;
console.log(this.it);
console.log(this.it.itemname);
  let bid=localStorage.getItem('buyerid');
 this.cart=new Cart();
 this.cart.cartid='cartid'+Math.round(Math.random()*1000);
 this.cart.itemId=this.it.itemId;
 this.cart.itemName=this.it.itemname;
 //console.log(this.item2.itemname);
 this.cart.categoryid=this.it.categoryid;
 this.cart.subcategoryid=this.it.subcategoryid;
 this.cart.sellerid=this.it.sellerid;
 this.cart. stocknumber=this.it.stocknumber;
 this.cart.price=this.it.price;
 this.cart.description=this.it.description;
 this.cart.remarks=this.it.remarks;
 this.cart.photo=this.it.photo;
 console.log(this.cart);
 this.service.AddtoCart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
 })
}
}
