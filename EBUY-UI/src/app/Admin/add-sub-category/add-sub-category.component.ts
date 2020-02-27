import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { SubCategory } from 'src/app/Models/sub-category';
import { CategoryService } from '../add-category/category.service';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  AddSubCategoryForm: FormGroup;
  submitted = false;

 scatg:SubCategory;
  constructor(private formBuilder: FormBuilder,private sservice:CategoryService) { }

  ngOnInit() {
      this.AddSubCategoryForm = this.formBuilder.group({
          SubCategoryId: ['',[Validators.required]],
          SubCategoryName: ['',[Validators.required]],
          CategoryId: ['',[Validators.required]],
          BreifDetails:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]], 
          Gst:['',[Validators.required]],
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
        this.scatg.CategoryId=this.AddSubCategoryForm.value["CategoryId"];
        this.scatg.SubcategoryId=this.AddSubCategoryForm.value["SubCategoryId"]
        this.scatg.SubcategoryName=this.AddSubCategoryForm.value["SubCategoryName"];
        this.scatg.BreifDetails=this.AddSubCategoryForm.value["BreifDetails"];  
        this.scatg.Gst=this.AddSubCategoryForm.value["Gst"]; 
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
onReset() {
    this.submitted = false;
    this.AddSubCategoryForm.reset();
}
}

