import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/Seller/seller.service';
import { Seller } from 'src/app/Models/seller';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  Sellerform:FormGroup;
  submitted:boolean=false;
  item:Seller;
  token:Token;
  sellerid:string;
  
  constructor(private builder:FormBuilder,private service:SellerService)
   { 

    this.sellerid=(localStorage.getItem('sellerid')) ;
    console.log(this.sellerid+" sellerid");
    
  }
  

  ngOnInit() {
    this.Sellerform=this.builder.group({
      sellerid:['',[Validators.required]],
      username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      //createdatetime:['',[Validators.required]],
      mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      Companyname:[''],
      BriefAboutcompany:[''],
      PostalAddress:[''],
      Gstin:[''],
      Website:[''],
      //desig:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
   this.myProfile();
  }

  myProfile()
  {
   
  this.service.ViewProfile(this.sellerid).subscribe(res=>  
   {
     
     this.item=res;
     console.log(this.item);
      this.Sellerform.patchValue({
       sellerid:this.item.sellerid,
       username:this.item.Username,
       emailid:this.item.Emailid,
       password:this.item.Password,
       //createddatetime:this.item.Createddatetime,
       mobileno:this.item.ContactNumber,
       website:this.item.Website,
       Gstin:this.item.Gstin,
       BriefAboutcompany:this.item.BriefAboutcompany,

      })
    })

    }
    
  //  get f(){
  //  return  this.Sellerform.controls;
  //  }
    

  // Edit()
  // {
  
  //   this.item=new Seller();
  //   this.item.sellerid=this.Sellerform.value[" buyerid"],
  //   this.item.Username=this.Sellerform.value["username"],
  //   this.item.Emailid=this.Sellerform.value["emailid"],
  //   this.item.Password=this.Sellerform.value["password"],
  //   this.item.ContactNumber=this.Sellerform.value["mobileno"],
  //   this.item.Website=this.Sellerform.value["website"],
  //   this.item.Gstin=this.Sellerform.value["Gstin"],
  //   this.item.BriefAboutcompany=this.Sellerform.value["BreifAboutCompany"],

  //    this.service.EditProfile(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully"),this.myProfile()},
  //    err=>{
  //     console.log(err);
  //   })
  // }
 

}
















  
