import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';
import { Purchasehistorytranscation } from 'src/app/Models/purchasehistorytranscation';
@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  
  purchaseform:FormGroup;
  item:Items;
  pth:Purchasehistorytranscation;
    constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }
  
    ngOnInit() {
  this.purchaseform=this.formbuilder.group({
    transactiontype:[''],
    cardNumber:[''],
    cvv:[''],
    expdate:[''],
    name:[''],
    datetime:[''],
    numberofitems:[''],
    remarks:['']
  })
  this.item=JSON.parse(localStorage.getItem('item'));
  console.log(this.item);
  console.log(this.item.itemId);
    }
  onSubmit()
  {
    this.pth=new Purchasehistorytranscation();
    this.pth.phtid='T'+Math.round(Math.random()*999);
    this.pth.buyerid=localStorage.getItem('buyerid');
    this.pth.sellerid=this.item.sellerid;
    this.pth.noofitems=this.purchaseform.value["numberofitems"];
    this.pth.itemid=this.item.itemId;
    this.pth.trancationtype=this.purchaseform.value["transactiontype"]
       this.pth.datetime=this.purchaseform.value["datetime"];
       this.pth.remarks=this.purchaseform.value["remarks"];
       console.log(this.pth);
      //  this.service.BuyItem(this.pth).subscribe(res=>{
         console.log("Purchase was Sucessfull");
         alert('Purchase Done Successfully');
      //  })
  
  }
  Purchase(){
    
  }
    
  
  }
  

