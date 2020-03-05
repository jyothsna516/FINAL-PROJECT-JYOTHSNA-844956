import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list:Items[];
//name:string;
  constructor(private route:Router,private service:BuyerService) { }

  ngOnInit() {
  }
  Search(itemName:string){
    this.service.Search(itemName).subscribe(res=>{
      this.list=res;
      console.log("items searched suceesfully");}
    )
  }

}
