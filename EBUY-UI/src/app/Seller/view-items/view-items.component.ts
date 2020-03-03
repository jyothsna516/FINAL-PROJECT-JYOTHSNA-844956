import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { SellerService } from 'src/app/services/Seller/seller.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
ViewItemForm:FormGroup;
submitted:boolean;
list:Items[];
items:Items;
//constructor(){}
//ngOnInit(){}
  constructor(private formBuilder:FormBuilder,private sservice:SellerService) { 
  
    this.ViewItems();}
//     let SellerId="S0001";
//     this.sservice.ViewItem(SellerId).subscribe(res=>{
//       this.item=res;
//       console.log(this.item);
//   },err=>{
//     console.log(err);
// })}
  ngOnInit(){}
  ViewItems(){
  // let SellerId="S0001";
    this.sservice.ViewItem("S0001").subscribe(res=>{
      this.items=res;
      console.log(this.items);
  },err=>{
    console.log(err);
})}
Deleteitem(iid:string){
  this.sservice.Deleteitem(iid).subscribe(res=>{
    console.log("record deleted");
    this.ViewItems();
  },
  err=>
  {
    console.log(err);
  })
 
}
}

//  ngOnInit() {
//  this.ViewItemForm = this.formBuilder.group({
 
//     itemid:['',[Validators.required]],
//     categoryid:['',[Validators.required]],
//     subcategoryid:['',[Validators.required]],
//     price:['',[Validators.required]],
//     itemname:['',[Validators.required]],
//     description:['',[Validators.required]],
//     stocknumber:['',[Validators.required]],
//     remarks:['',[Validators.required]]
//     })
//   }
// get f(){
//    return this.ViewItemForm.controls;
//  }}
//  edit(){
//   this.item=new Items();

//   this.sservice.UpdateItem(this.list).subscribe(res=>{this.list=res;
//   console.log(this.list)})

// }
// }
// onSubmit() {
//  this.submitted = true; 
// //   //this. 
// this.item=new Items(); 
//   if (this.ViewItemForm.valid) {
 //this.sservice.ViewItem().subscribe(res=>{
 // this.item=res;
 // console.log(this.item);
//     this.ViewItemForm.setValue({
//       itemid:this.item.ItemId,
//       itemname:this.item.ItemName,
//       stockid:this.item.StockNumber,
//       categoryid:this.item.CategoryId,
//       subcategoryid:this.item.SubcategoryId,
//       price:this.item.Price
//     }),
//     err=>{
//       console.log(err);
//   }})

// }
// onReset() {
//   this.submitted = false;
//   this.ViewItemForm.reset();
// }

