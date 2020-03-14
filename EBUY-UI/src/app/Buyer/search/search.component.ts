import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  searchform:FormGroup;
  itemName:string;
//name:string;
  constructor(private route:Router,private service:BuyerService,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemName:['',[Validators.required]]

    })
   // alert("validations failed");
  }
  Search(itemName:string){
    console.log("search");
    this.service.Search(itemName).subscribe(res=>{
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
  console.log("hello");
console.log(item);
localStorage.setItem('item',JSON.stringify(item));
console.log(localStorage.getItem('item'));
this.route.navigateByUrl('/buyer/purchasehistory')
}
AddtoCart(item:Items){
  console.log(item);
// console.log(this.it);
// console.log(this.it.itemname);
  //let bid=localStorage.getItem('buyerid');
 this.cart=new Cart();
 this.cart.id='cartid'+Math.round(Math.random()*1000);
 this.cart.itemId=item.itemId;
 this.cart.itemName=item.itemName;
 this.cart.categoryId=item.categoryId;
 this.cart.subcategoryId=item.subcategoryId;
this.cart.buyerid=localStorage.getItem('buyerid');
// this.cart.sellerId=item.sellerId;
 this.cart.stockNumber=item.stockNumber;
 this.cart.price=item.price;
 this.cart.description=item.description;
 this.cart.remarks=item.remarks;
 this.cart.img=item.photo;
 console.log(this.cart);
 this.service.AddtoCart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
 })
}
}
