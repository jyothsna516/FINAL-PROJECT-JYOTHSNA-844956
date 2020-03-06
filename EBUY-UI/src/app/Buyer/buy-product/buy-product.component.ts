import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'; 
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
list:Items[];
  constructor(private formbuilder:FormBuilder,private service:BuyerService) {
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log("this.list");
    })
   }


  ngOnInit() {
  }



}
