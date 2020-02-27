import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string="https://localhost:44317/Admin/"
  constructor(private http:HttpClient) { }
    public AddCategory(catg:Category):Observable<any>{
      return this.http.post<any>(this.url+'AddCategory',JSON.stringify(catg),Requestheaders);}
      public AddSubCategory(scatg:SubCategory):Observable<any>{
        return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(scatg),Requestheaders);}

    }
 
