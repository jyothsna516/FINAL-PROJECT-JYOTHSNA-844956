import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/services/Seller/seller.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  sellerregister:FormGroup;
  submitted:boolean=true;
  item:Seller;

  constructor(private form:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.sellerregister=this.form.group({
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
        
  });

}

ViewProfile(){
  let id=this.sellerregister.value['id']
  this.service.ViewProfile(id).subscribe(res=>{
    this.item=res;
    console.log("this.item");
  this.sellerregister.setValue({
    SellerId:this.item.SellerId,
    Username:this.item.Username,
    Companyname:this.item.Companyname,
    BriefAboutcompany:this.item.BriefAboutcompany,
    ContactNumber:this.item.ContactNumber,
    Website:this.item.Website,
    Gstin:this.item.Gstin,
    Password:this.item.Password,
    Emailid:this.item.Emailid

  })},
    err=>{
      console.log("err")
  
  });


  }
onSubmit(){
    this.submitted=true;
  }
}





