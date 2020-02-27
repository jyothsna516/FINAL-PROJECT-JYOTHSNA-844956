import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Category } from 'src/app/Models/category';
import { CategoryService } from './category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  AddCategoryForm: FormGroup;
  submitted = false;

 catg:Category;
  constructor(private formBuilder:FormBuilder,private sservice:CategoryService) { }

  ngOnInit() {
      this.AddCategoryForm = this.formBuilder.group({
          CategoryId: ['',[Validators.required]],
          CategoryName: ['',[Validators.required]],
          BreifDetails:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]], 
          acceptTerms: [false, Validators.requiredTrue]
      });
  }
  get f()
  {
    return this.AddCategoryForm.controls;
  }
  onSubmit() {
    this.submitted = true;  
    //this.buyer=new Buyer(); 
    if (this.AddCategoryForm.valid) {
      this.Add();
  }
}
  Add()
  {
    
        this.catg=new Category();
        this.catg.CategoryId=this.AddCategoryForm.value["CategoryId"];
        this.catg.CategoryName=this.AddCategoryForm.value["CategoryName"];
        this.catg.BreifDetails=this.AddCategoryForm.value["BreifDetails"];   
        // console.log(this.buyer);
        this.sservice.AddCategory(this.catg).subscribe(res=>{
          console.log('Added categories sucessfully')
        },err=>{
          console.log(err);
        })
         alert('SUCCESS!! :-)\n\n') 
        // console.log(JSON.stringify(this.SignupForm.value)); 
      

}
onReset() {
    this.submitted = false;
    this.AddCategoryForm.reset();
}
}






