import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { CategoryService } from '../add-category/category.service';
@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  list:Category[];
  
  
    constructor(private cservice:CategoryService){
     
    }

  ngOnInit() {
    this.ViewCategory();

  }
  ViewCategory():void
  {

    this.cservice.ViewCategory().subscribe(res=>{
      this.list=res;
      console.log(this.list);
     // console.log(this.list);
    },err=>{console.log(err);})

}
DeleteCategory(categoryId:string):void{
  this.cservice.DeleteCategory(categoryId).subscribe(res=>{
    console.log("record deleted");
    this.ViewCategory();
  },err=>{console.log(err);})

}
}
