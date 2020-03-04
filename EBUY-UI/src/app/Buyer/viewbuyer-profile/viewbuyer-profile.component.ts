import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from '../buyer.service';
@Component({
  selector: 'app-viewbuyer-profile',
  templateUrl: './viewbuyer-profile.component.html',
  styleUrls: ['./viewbuyer-profile.component.css']
})
export class ViewbuyerProfileComponent implements OnInit {

  Buyerform:FormGroup;
  submitted:boolean=false;
  item:Buyer;
  constructor(private form:FormBuilder,private service:BuyerService) {
    this.ViewProfile();
   }

  ngOnInit() {
    this.Buyerform=this.form.group({
      id:['',[Validators.required]],
      username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      createdatetime:['',[Validators.required]],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
  }
ViewProfile(){
  let bid="I0001";
  this.service.GetProfile(bid).subscribe(res=>{this.item=res;
  console.log(this.item)
  this.Buyerform.patchValue({
    buyerId:this.item.BuyerId,
    username:this.item.Username,
    emailid:this.item.Emailid,
    Createddatetime:this.item.Createddatetime,
    password:this.item.Password,
    mobileno:this.item.Mobileno

  })
},
  err=>{
    console.log(err);
  }
  )}
  Onsubmit(){
    alert("validated")
    this.submitted=true;
    if(this.Buyerform.valid){
      this.ViewProfile();
    }
  }
 
  Edit()
  {
  
    this.item=new Buyer();
    this.item.BuyerId=this.Buyerform.value["BuyerId"],
    this.item.Username=this.Buyerform.value["Username"],
    this.item.Emailid=this.Buyerform.value["Email"],
    this.item.Password=this.Buyerform.value["Password"],
    this.item.Mobileno=this.Buyerform.value["MobileNumber"],
    this.item.Createddatetime=new Date(this.Buyerform.value["Createddatetime"])
    this.service.Editprofile(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully")},
    err=>{
      console.log(err);
    })
  }
 

}




