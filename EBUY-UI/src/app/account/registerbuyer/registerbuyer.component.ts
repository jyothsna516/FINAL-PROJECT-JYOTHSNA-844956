import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  
  SignupForm: FormGroup;
    submitted = false;
    list:Buyer[];
    buyer:Buyer;

    constructor(private formBuilder: FormBuilder,private uservice:UserService) { }
    ngOnInit() {
        this.SignupForm = this.formBuilder.group({
            bid: ['',[Validators.required]],
            bname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
            pwd:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
            emailid: ['', [Validators.required,Validators.email]],
            mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
            createddatetime:['',[Validators.required]], 
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.SignupForm.controls; }

    onSubmit() {
        this.submitted = true;  
        //this.buyer=new Buyer(); 
        if (this.SignupForm.valid) {
            this.buyer=new Buyer();
            this.buyer.buyerId=this.SignupForm.value["bid"];
            this.buyer.username=this.SignupForm.value["bname"];
            this.buyer.password=this.SignupForm.value["pwd"];
            this.buyer.emailid=this.SignupForm.value["emailid"];
            this.buyer.mobileno=this.SignupForm.value["mobileno"];
            this.buyer.createddatetime=this.SignupForm.value["createddatetime"];
            // console.log(this.buyer);
            this.uservice.BuyerRegister(this.buyer).subscribe(res=>{
              console.log('buyer registered sucessfully')
            },err=>{
              console.log(err);
            })
            // alert('SUCCESS!! :-)\n\n') 
            // console.log(JSON.stringify(this.SignupForm.value)); 
          }

    }
    onReset() {
        this.submitted = false;
        this.SignupForm.reset();
    }
}




