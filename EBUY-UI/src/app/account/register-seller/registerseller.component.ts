import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-register-seller',
  templateUrl: './registerseller.component.html',
  styleUrls: ['./registerseller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  SignupForm: FormGroup;
  submitted = false;
list:Seller[];
seller:Seller;
  constructor(private formBuilder: FormBuilder,private service:UserService) { }

  ngOnInit() {
      this.SignupForm = this.formBuilder.group({
        //  SellerId: ['', Validators.required],
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
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.SignupForm.controls; }

  onSubmit() {
      this.submitted = true;
       // display form values on success
      if (this.SignupForm.valid) {
        this.seller=new Seller();
        this.seller.sellerid='sellerid'+Math.round(Math.random()*1000);
        this.seller.Username=this.SignupForm.value["Username"];
        this.seller.Password=this.SignupForm.value["Password"];
        this.seller.Emailid=this.SignupForm.value["Emailid"];
        this.seller.ContactNumber=this.SignupForm.value["ContactNumber"];
        this.seller.BriefAboutcompany=this.SignupForm.value["BriefAboutcompany"];
        this.seller.Companyname=this.SignupForm.value["Companyname"];
        this.seller.Gstin=this.SignupForm.value["Gstin"];
        this.seller.PostalAddress=this.SignupForm.value["PostalAddress"];
        this.seller.Website=this.SignupForm.value["Website"];
        this.service.SellerRegister(this.seller).subscribe(res=>{
            console.log('seller registered sucessfully')
          },err=>{
            console.log(err);
          })
         alert('SUCCESS!! :-)\n\n') 
          //console.log(JSON.stringify(this.SignupForm.value));
        }
  }

  onReset() {
      this.submitted = false;
      this.SignupForm.reset();
  }
}

 

