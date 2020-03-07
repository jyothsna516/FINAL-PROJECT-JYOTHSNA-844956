import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from '../buyer.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-viewbuyer-profile',
  templateUrl: './viewbuyer-profile.component.html',
  styleUrls: ['./viewbuyer-profile.component.css']
})
export class ViewbuyerProfileComponent implements OnInit {

  Buyerform:FormGroup;
  submitted:boolean=false;
  item:Buyer;
  token: Token;
  buyerid:string;
  constructor(private builder:FormBuilder,private service:BuyerService)
   { 

    this.buyerid=(localStorage.getItem('buyerid')) ;
    console.log(this.buyerid+" buyerid");
    
  }
  

  ngOnInit() {
    this.Buyerform=this.builder.group({
      buyerid:['',[Validators.required]],
      username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      createdatetime:['',[Validators.required]],
      mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
   this.ViewProfile();
  }

  ViewProfile()
  {
   
  this.service.GetProfile(this.buyerid).subscribe(res=>  
   {
     
     this.item=res;
     console.log(this.item);
      this.Buyerform.patchValue({
       buyerid:this.item.buyerid,
       username:this.item.username,
       emailid:this.item.emailid,
       password:this.item.password,
       createddatetime:this.item.createddatetime,
       mobileno:this.item.mobileno
      })
    })

    }
    
   get f(){
   return  this.Buyerform.controls;
   }
    

  Edit()
  {
  
    this.item=new Buyer();
    this.item.buyerid=this.Buyerform.value[" buyerid"],
    this.item.username=this.Buyerform.value["username"],
    this.item.emailid=this.Buyerform.value["emailid"],
    this.item.password=this.Buyerform.value["password"],
    this.item.mobileno=this.Buyerform.value["mobileno"],
    this.item.createddatetime=new Date(this.Buyerform.value["createddatetime"])
     this.service.EditProfile(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully"),this.ViewProfile()},
     err=>{
      console.log(err);
    })
  }
 

}





