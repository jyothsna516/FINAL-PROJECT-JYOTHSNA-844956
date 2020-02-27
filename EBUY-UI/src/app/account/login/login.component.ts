import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  pwd:string;
  sid:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  public Login(){
    if(this.uname=="jyo"&&this.pwd=="123"){sessionStorage.setItem("un",this.uname),
      this.route.navigateByUrl('buyer');
  }
  //else{this.route.navigateByUrl('register-buyer');}
  if(this.uname=="sai"&&this.pwd=="155"&&this.sid=="S0001"){sessionStorage.setItem("un",this.uname),
    this.route.navigateByUrl('seller');
}
//else{this.route.navigateByUrl('register-seller');}
 if(this.uname=="sowmya"&&this.pwd=="159"){sessionStorage.setItem("un",this.uname),
  this.route.navigateByUrl('admin');
}
  }
//    public SIGNUPBuyer(){
  
//        this.route.navigateByUrl('buyer');
//   }
//   public SIGNUPSeller(){
  
//     this.route.navigateByUrl('seller');
// }
  }


