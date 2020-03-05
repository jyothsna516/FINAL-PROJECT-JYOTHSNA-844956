import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { SubCategory } from 'src/app/Models/sub-category';
import { CategoryService } from '../add-category/category.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  AddSubCategoryForm: FormGroup;
  submitted = false;
  //subcategory:SubCategory;
  list:Category[];
 scatg:SubCategory;
  constructor(private formBuilder: FormBuilder,private sservice:CategoryService) {this.Getcategory(); }

  ngOnInit() {
      this.AddSubCategoryForm = this.formBuilder.group({
          subcategoryid: ['',[Validators.required]],
          subcategoryname: ['',[Validators.required]],
          categoryname:['',[Validators.required]],
          categoryid: ['',[Validators.required]],
          breifdetails:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]], 
          gst:['',[Validators.required]],
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  get f()
  {
    return this.AddSubCategoryForm.controls;
  }
  onSubmit() {
    this.submitted = true;  
    //this.buyer=new Buyer(); 
    if (this.AddSubCategoryForm.valid) {
      this.Add();
  }
}
  Add(){
    //this.buyer=new Buyer(); 
    if (this.AddSubCategoryForm.valid) {
        this.scatg=new SubCategory();
        this.scatg.categoryid=this.AddSubCategoryForm.value["categoryid"];
        this.scatg.categoryname=this.AddSubCategoryForm.value["categoryname"];
        this.scatg.subcategoryid=this.AddSubCategoryForm.value["subcategoryid"]
        this.scatg.subcategoryname=this.AddSubCategoryForm.value["subcategoryname"];
        this.scatg.breifdetails=this.AddSubCategoryForm.value["breifdetails"];  
        this.scatg.gst=this.AddSubCategoryForm.value["gst"]; 
        // console.log(this.buyer);
        this.sservice.AddSubCategory(this.scatg).subscribe(res=>{
          console.log('Added categories sucessfully')
        },err=>{
          console.log(err);
        })
         alert('SUCCESS!! :-)\n\n') 
        // console.log(JSON.stringify(this.SignupForm.value)); 
      }

}
Getcategory()
   {
     this.sservice.Getcategory().subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>
      {
        console.log(err);
      })
    }
onReset() {
    this.submitted = false;
    this.AddSubCategoryForm.reset();
}
}

