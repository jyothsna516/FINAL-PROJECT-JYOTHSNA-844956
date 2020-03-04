import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { CategoryService } from '../add-category/category.service';

@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {

  list:SubCategory[];
  
  
    constructor(private cservice:CategoryService){
     
    }

  ngOnInit() {
    this.ViewSubCategory();

  }
  ViewSubCategory():void
  {
    this.cservice.ViewSubCategory().subscribe(res=>{
      this.list=res;
      console.log(this.list);
     // console.log(this.list);
    },err=>{console.log(err);})

}
DeleteSubCategory(subcategoryId:string):void{
  console.log(subcategoryId);
  this.cservice.DeleteSubCategory(subcategoryId).subscribe(res=>{
    console.log("record deleted");
    this.ViewSubCategory();
  },
  err=>{console.log(err);})
}

}
