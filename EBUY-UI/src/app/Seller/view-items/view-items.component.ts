import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UserService } from 'src/app/Account/services/user.service';
import { SellerService } from 'src/app/services/Seller/seller.service';
import { Items } from 'src/app/Models/items';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
ViewItemForm:FormGroup;
submitted:boolean;
item:Items;
  constructor(private formBuilder:FormBuilder,private sservice:SellerService) { }

  ngOnInit() {
    this.ViewItemForm = this.formBuilder.group({
        itemid: ['',[Validators.required]],

});}
get f(){
  return this.ViewItemForm.controls;
}
onSubmit() {
  this.submitted = true; 
  //this. 
  //this.buyer=new Buyer(); 
  if (this.ViewItemForm.valid) {
  this.sservice.ViewItem(id).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.ViewItemForm.setValue({
      itemid:this.item.ItemId,
      itemname:this.item.ItemName,
      stockid:this.item.StockNumber,
      categoryid:this.item.CategoryId,
      subcategoryid:this.item.SubcategoryId,
      price:this.item.Price
    }),
    err=>{
      console.log(err);
  }})

}
onReset() {
  this.submitted = false;
  this.ViewItemForm.reset();
}
}

