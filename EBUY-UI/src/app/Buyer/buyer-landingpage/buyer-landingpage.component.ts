import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-buyer-landingpage',
  templateUrl: './buyer-landingpage.component.html',
  styleUrls: ['./buyer-landingpage.component.css']
})
export class BuyerLandingpageComponent implements OnInit {

  uname:string
  constructor(private route:Router) { if(sessionStorage.getItem("un")){
    this.uname=sessionStorage.getItem("un");
}
else{this.route.navigateByUrl('login');}}

  ngOnInit() {
  }
  }
