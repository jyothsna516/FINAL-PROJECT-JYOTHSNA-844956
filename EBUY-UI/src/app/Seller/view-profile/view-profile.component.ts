import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/Seller/seller.service';
import { Seller } from 'src/app/Models/seller';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  sellerform:FormGroup;
  list:Seller[];
seller:Seller;
submitted:boolean;
  constructor(private service:SellerService,private form:FormBuilder) { }

  ngOnInit() {
    this.sellerform = this.form.group({
      SellerId: ['', Validators.required],
      Username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
     // spwd:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      Emailid: ['', [Validators.required, Validators.email]],
      ContactNumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      BriefAboutcompany:['',[Validators.required]],
      PostalAddress:['',[Validators.required]],
      Gstin:['',[Validators.required]],
      Website:['',Validators.required],
      acceptTerms: [false,Validators.requiredTrue]

  })}
  // myprofile()
  // {
  //  let sid="S0001";
  // this.service.ViewProfile(sid).subscribe(res=>  
  //  {
     
  //    this.seller=res;
  //    console.log(this.seller);
  //    this.sellerform.patchValue({
  //      id:this.seller.SellerId,
  //      username:this.seller.Username,
  //      emailid:this.seller.Emailid,
  //      password:this.seller.Password,
  //      briefaboutcompany:this.seller.BriefAboutcompany,
  //      companyname:this.seller.Companyname,
  //      postaladdress:this.seller.PostalAddress,
  //      website:this.seller.Website,
  //      GSTIN:this.seller.Gstin,
  //      mobile:this.seller.ContactNumber,
       
  //    })
  //   },
  //   err=>{
  //     console.log(err);
  //   }
  //   )}
  //   Onsubmit(){
  //     alert("validated")
  //     this.submitted=true;
  //     if(this.sellerform.valid){
  //       this.myprofile();
  //     }
  //   }
   
  Edit()
  {
  
    this.seller=new Seller();
    this.seller.SellerId=this.sellerform.value["SellerId"],
    this.seller.Username=this.sellerform.value["Username"],
    this.seller.Emailid=this.sellerform.value["Emailid"],
    this.seller.Password=this.sellerform.value["Password"],
    this.seller.ContactNumber=this.sellerform.value["MobileNumber"],
    this.seller.Companyname=this.sellerform.value["Companyname"],
    this.seller.BriefAboutcompany=this.sellerform.value["BriefAboutcompany"],
    this.seller.PostalAddress=this.sellerform.value["PostalAddress"],
    this.seller.Website=this.sellerform.value["Website"],
    this.seller.Gstin=this.sellerform.value["GSTIN"],
    this.seller.ContactNumber=this.sellerform.value["mobile"],
    this.service.EditProfile(this.seller).subscribe(res=>{console.log(this.seller),alert("updated succesfully")},
    err=>{
      console.log(err);
    })
  }
  
  }


