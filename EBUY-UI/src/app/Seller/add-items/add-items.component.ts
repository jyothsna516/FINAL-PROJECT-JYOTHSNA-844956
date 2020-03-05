import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/Models/items';

import { SellerService } from 'src/app/services/Seller/seller.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

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
 categorylist:Category[];
    subcategorylist:SubCategory[];
    photo:string;
selectedFile : File = null;
  constructor(private formBuilder: FormBuilder,private sservice:SellerService) { this.sservice.GetCategory().subscribe(res=>{
    this.categorylist=res;
    console.log(this.categorylist);
  })}

  ngOnInit() {
      this.AddItemForm = this.formBuilder.group({
         // itemid: ['',[Validators.required]],
          categoryid: ['',[Validators.required]],
          subcategoryid: ['',[Validators.required]],
          price:['',[Validators.required]],
          stocknumber: ['',[Validators.required]],
          itemname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          description:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
          remarks:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]], 
          // photo:['',[Validators.required]],   
          
      });
  }
  get f(){
    return this.AddItemForm.controls;
  }
  onGetSubCategory()
  {
    let categoryid=this.AddItemForm.value["Categoryid"];
    console.log(categoryid);
    this.sservice.GetSubCategory(categoryid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
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
        this.item.itemId='I'+Math.floor(Math.random()*1000);
        this.item.categoryid=this.AddItemForm.value["categoryid"];
        this.item.subcategoryid=this.AddItemForm.value["subcategoryid"];
        this.item.price=this.AddItemForm.value["price"];
        this.item.stocknumber=this.AddItemForm.value["stocknumber"];
       // this.item.price=this.AddItemForm.value["price"];
        this.item.itemname=this.AddItemForm.value["itemname"];
        this.item.description=this.AddItemForm.value["description"];
        this.item.remarks=this.AddItemForm.value["remarks"];
        this.item.photo=this.photo;
        // console.log(this.buyer);
        this.sservice.AddItem(this.item).subscribe(res=>{
          console.log('Added Items sucessfully')
        },err=>{
          console.log(err);
        })
        // alert('SUCCESS!! :-)\n\n') 
        // console.log(JSON.stringify(this.SignupForm.value)); 
      }
    //   fileEvent(event){
    //     this.photo = event.target.files[0].name;
    // }


onReset() {
    this.submitted = false;
    this.AddItemForm.reset();
}
}



