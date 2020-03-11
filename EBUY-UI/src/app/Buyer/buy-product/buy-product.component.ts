import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'; 
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';

import {Router} from '@angular/router';
import { Purchasehistorytranscation } from 'src/app/Models/purchasehistorytranscation';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
// list:Items[];
//   constructor(private formbuilder:FormBuilder,private service:BuyerService) {
//     this.service.GetAllItems().subscribe(res=>{
//       this.list=res;
//       console.log("this.list");
//     })
//    }
//    Buy(){
     
//    }
transForm:FormGroup;
transactionhistory:Purchasehistorytranscation;
itemlist:Items[];
item:Items;

constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

ngOnInit()
{
console.log("gjhj")
  this.item=JSON.parse(JSON.stringify(localStorage.getItem('item'))); 
console.log(this.item);
console.log(this.item.itemId);
this.transForm=this.formbuilder.group({
   noofitems:[''],
  transactiontype:[''],
});


}

onSubmit()
{
this.transactionhistory=new Purchasehistorytranscation();
this.transactionhistory.phtid='I'+Math.round(Math.random()*999);
//this.transactionhistory.transactionId='T'+Math.round(Math.random()*999);
this.transactionhistory.buyerid=localStorage.getItem("buyerid");
this.transactionhistory.sellerid=this.item.sellerId;
this.transactionhistory.noofitems=this.transForm.value["noofitems"];
this.transactionhistory.itemId=this.item.itemId;
this.transactionhistory.trancationtype=this.transForm.value["transactiontype"];
this.transactionhistory.datetime=new Date();
this.transactionhistory.remarks=this.item.remarks;
   console.log(this.transactionhistory);
   this.service.BuyItem(this.item).subscribe(
     res=>{
     console.log("Transaction is Successfull");
     alert('Ordered Successfully');
   })
}
}
