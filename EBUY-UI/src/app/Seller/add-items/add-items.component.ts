import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { UserService } from 'src/app/Account/services/user.service';
import { SellerService } from 'src/app/services/Seller/seller.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  AddItemForm: FormGroup;
  submitted = false;
 list:Items[];
 item:Items;
  constructor(private formBuilder: FormBuilder,private sservice:SellerService) { }

  ngOnInit() {
      this.AddItemForm = this.formBuilder.group({
          itemid: ['',[Validators.required]],
          categoryid: ['',[Validators.required]],
          subcategoryid: ['',[Validators.required]],
          price: ['',[Validators.required]],
          stocknumber: ['',[Validators.required]],
          itemname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          description:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          remarks:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],    
          acceptTerms: [false, Validators.requiredTrue]
      });
  }
  get f(){
    return this.AddItemForm.controls;
  }
  onSubmit() {
    this.submitted = true;  
    //this.buyer=new Buyer(); 
    if (this.AddItemForm.valid) {
      this.Add();
  }
}
  Add() {
        this.item=new Items();
        this.item.ItemId=this.AddItemForm.value["itemid"];
        this.item.CategoryId=this.AddItemForm.value["categoryid"];
        this.item.SubcategoryId=this.AddItemForm.value["subcategoryid"];
        this.item.Price=this.AddItemForm.value["price"];
        this.item.StockNumber=this.AddItemForm.value["stocknumber"];
        this.item.Price=this.AddItemForm.value["price"];
        this.item.ItemName=this.AddItemForm.value["itemname"];
        this.item.Description=this.AddItemForm.value["description"];
        this.item.Remarks=this.AddItemForm.value["remarks"];
        // console.log(this.buyer);
        this.sservice.AddItem(this.item).subscribe(res=>{
          console.log('Added Items sucessfully')
        },err=>{
          console.log(err);
        })
        // alert('SUCCESS!! :-)\n\n') 
        // console.log(JSON.stringify(this.SignupForm.value)); 
      }


onReset() {
    this.submitted = false;
    this.AddItemForm.reset();
}
}



