import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from '../buyer.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  EditProfileForm: FormGroup;
  submitted: boolean;
    
    buyer:Buyer;
//ngOnInit(){}
   constructor(private formBuilder: FormBuilder,private service:BuyerService) { }
   
   ngOnInit() {
       this.EditProfileForm = this.formBuilder.group({
           Bid:['',[Validators.required]],
           Username:['',[Validators.required]],
           Password:['',[Validators.required,Validators.pattern('^[a-z]{8}[~!@#$%^&*()]$')]],
           Emailid: ['', [Validators.required, Validators.email]],
           Mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
           Datetime:['',[Validators.required]]
          
           
          
       });
   }
 
   // convenience getter for easy access to form fields
   get f() { return this.EditProfileForm.controls; }
 
   onSearch(){
     let Bid=this.EditProfileForm.value["Bid"];
     this.service.GetProfile(Bid).subscribe(res=>
       {
           this.buyer=res;
           console.log(this.buyer);
           this.EditProfileForm.setValue({
            Bid:this.buyer.BuyerId,
            Username:this.buyer.Username,
            Password:this.buyer.Password,
            Email:this.buyer.Emailid,
            Mobile:this.buyer.Mobileno,
            Datetime:this.buyer.Createddatetime
 
          })
       },err=>{
         console.log(err)
       })
   }
 
   onSubmit() {
       
       this.submitted = true;
        // display form values on success
        if (this.EditProfileForm.valid) {
         this.buyer=new Buyer();
         this.buyer.BuyerId=this.EditProfileForm.value["Bid"];   
     this.buyer.Username=this.EditProfileForm.value["Username"];
     this.buyer.Password=this.EditProfileForm.value["Password"];
     this.buyer.Emailid=this.EditProfileForm.value["Email"];
     this.buyer.Mobileno=this.EditProfileForm.value["Mobile"];
     this.buyer.Createddatetime=this.EditProfileForm.value["Datetime"];
     this.service.Editprofile(this.buyer).subscribe(res=>{
     console.log('Record Updated')
     },err=>{
     console.log(err)
     })
         alert('SUCCESS!! :-)\n\n') 
         // console.log(JSON.stringify(this.SignupForm.value));
     }
   }
 
   onReset() {
       this.submitted = false;
       this.EditProfileForm.reset();
   }
  }
