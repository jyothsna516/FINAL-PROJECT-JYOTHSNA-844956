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
  token: Token;
  sellerid:string;
  constructor(private builder:FormBuilder,private service:SellerService)
   { }
   ngOnInit(){}

//     this.buyerid=(localStorage.getItem('sellerid')) ;
//     console.log(this.sellerid+" sellerid");
    
//   }
  

//   ngOnInit() {
//     this.Buyerform=this.builder.group({
//       sellerid:['',[Validators.required]],
//       username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
//       companyname:[''[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
//       briefaboutcompany:[''[Validators.required]],
//       postaladdress:[''[[Validators.required]],
//       gstin:[''[Validators.required]],
//       website:[''[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
//       mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
//       //desig:['',[Validators.required]],
//       emailid:['',[Validators.required.Validators.email]],
//       password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
//   });
//    this.myProfile();
//   }

//   myProfile()
//   {
   
//   this.service.ViewProfile(this.sellerid).subscribe(res=>  
//    {
     
//      this.item=res;
//      console.log(this.item);
//       this.Sellerform.patchValue({
//        sellerid:this.item.sellerid,
//        username:this.item.Username,
//        emailid:this.item.Emailid,
//        password:this.item.Password,
//        companyname:this.item.Companyname,
//        breifaboutcompany:this.item.BriefAboutcompany,
//         postaladdress:this.item.PostalAddress,
//         gstin:this.item.Gstin,
// website:this.item.Website,
// mobileno:this.item.ContactNumber
//       })
//     })

//     }
    
//    get f(){
//    return  this.Sellerform.controls;
//    }
    

//   Edit()
//   {
  
//     this.item=new Seller();
//     this.item.sellerid=this.Sellerform.value["sellerid"],
//     this.item.Username=this.Sellerform.value["username"],
//     this.item.Emailid=this.Sellerform.value["emailid"],
//     this.item.Password=this.Sellerform.value["password"],
//     this.item.ContactNumber=this.Sellerform.value["mobileno"],
//     this.item.Companyname=this.Sellerform.value["companyname"],
//   this.item.PostalAddress=this.Sellerform.value["postaladdress"],
//  this.item.BriefAboutcompany=this.Sellerform.value["breifaboutcompany"],
//  this.item.Gstin=this.Sellerform.value["gstin"],
// this.item.Website=this.Sellerform.value["website"]

//      this.service.EditProfile(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully"),this.myProfile()},
//      err=>{
//       console.log(err);
//     })
//   }


}



















  
