import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
@Component({
  selector: 'app-seller-landingpage',
  templateUrl: './seller-landingpage.component.html',
  styleUrls: ['./seller-landingpage.component.css']
})
export class SellerLandingpageComponent implements OnInit {
  constructor(private route:Router){}
//   uname:string
//   constructor(private route:Router) { if(sessionStorage.getItem("un")){
//     this.uname=sessionStorage.getItem("un");
// }
// else{this.route.navigateByUrl('login');}}

  
  ngOnInit() {
  }
  public Logout()
{
  
  sessionStorage.clear();
  //this.route.navigate(['']);
  this.route.navigateByUrl('#home')
}

}
