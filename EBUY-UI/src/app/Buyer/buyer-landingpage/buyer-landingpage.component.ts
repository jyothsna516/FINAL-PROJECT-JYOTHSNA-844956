import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';
@Component({
  selector: 'app-buyer-landingpage',
  templateUrl: './buyer-landingpage.component.html',
  styleUrls: ['./buyer-landingpage.component.css']
})
export class BuyerLandingpageComponent implements OnInit {
  constructor(){}
  // list:Items[];
  // constructor(private service:BuyerService) {
  //     this.service.GetAllItems().subscribe(res=>{
  //       this.list=res;
  //       console.log(this.list);
  //     })
  //  }
// username:string;
// password:string;

//   uname:string
//   constructor(private route:Router) { if(sessionStorage.BuyerLogin("username")){
//     this.uname=sessionStorage.getItem("un");
// }
// else{this.route.navigateByUrl('login');}}

  ngOnInit() {
  }
  }
