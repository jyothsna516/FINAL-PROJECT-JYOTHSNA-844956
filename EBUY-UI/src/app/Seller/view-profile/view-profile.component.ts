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
  //  ngOnInit(){}

//     this.buyerid=(localStorage.getItem('sellerid')) ;
//     console.log(this.sellerid+" sellerid");
    
//   }
  

  ngOnInit() {
    this.Sellerform=this.builder.group({
      sellerid:['',[Validators.required]],
      Username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      Companyname:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      BriefAboutcompany:['',[Validators.required]],
      PostalAddress:['',[Validators.required]],
      Gstin:['',[Validators.required]],
      Website:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      ContactNumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
     // emailid:['',[Validators.required.Validatorsemail]],
      Password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
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
       Username:this.item.Username,
       //Emailid:this.item.Emailid,
       Password:this.item.Password,
       Companyname:this.item.Companyname,
       BreifAboutcompany:this.item.BriefAboutcompany,
        PostalAddress:this.item.PostalAddress,
        Gstin:this.item.Gstin,
Website:this.item.Website,
ContactNumber:this.item.ContactNumber
      })
    })

    }
    
   get f(){
   return  this.Sellerform.controls;
   }
    

  Edit()
  {
  
    this.item=new Seller();
    this.item.sellerid=this.Sellerform.value["sellerid"],
    this.item.Username=this.Sellerform.value["Username"],
    //this.item.Emailid=this.Sellerform.value["Emailid"],
    this.item.Password=this.Sellerform.value["Password"],
    this.item.ContactNumber=this.Sellerform.value["ContactNumber"],
    this.item.Companyname=this.Sellerform.value["Companyname"],
  this.item.PostalAddress=this.Sellerform.value["PostalAddress"],
 this.item.BriefAboutcompany=this.Sellerform.value["BreifAboutcompany"],
 this.item.Gstin=this.Sellerform.value["Gstin"],
this.item.Website=this.Sellerform.value["Website"]

     this.service.EditProfile(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully"),this.myProfile()},
     err=>{
      console.log(err);
    })
  }


}



















  
