import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {
constructor(){}
//   uname:string
//   constructor(private route:Router) { if(sessionStorage.getItem("un")){
//     this.uname=sessionStorage.getItem("un");
// }
// else{this.route.navigateByUrl('login');}}

  ngOnInit() {
  }

}
