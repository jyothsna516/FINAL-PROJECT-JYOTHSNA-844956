import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import {Seller} from 'src/app/Models/seller';
import { Items } from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string="https://localhost:44317/Item/"
  url1:string="https://localhost:44317/Seller/"
  constructor(private http:HttpClient) { }
    public AddItem(item:Items):Observable<any>{
      return this.http.post<any>(this.url+'Additem',JSON.stringify(item),Requestheaders);}
      public ViewItem(SellerId:string):Observable<Items>{
        return this.http.get<Items>(this.url+'GetAll/'+SellerId,Requestheaders);}
        public GetItem(SellerId:string):Observable<Items>{
          return this.http.get<Items>(this.url+'Getitem/'+SellerId,Requestheaders);}
        public UpdateItem(item:Items):Observable<any>{
          return this.http.put<any>(this.url+'updateitem/',JSON.stringify(item),Requestheaders);
        }
        public ViewProfile(seller:Seller):Observable<any>{
          return this.http.get<any>(this.url1+'GetProfile');}
          public EditProfile(seller:Seller):Observable<any>{
            return this.http.get<any>(this.url1+'EditProfile/');
    
}
public Deleteitem(Iid:string):Observable<Items>
  {
    return this.http.delete<Items>(this.url+'Delete/'+Iid);
  }
public GetCategory():Observable<Category[]>
{
  return this.http.get<Category[]>(this.url+'GetCategory',Requestheaders);
}
public GetSubCategory(Cid:string):Observable<SubCategory[]>
{
  return this.http.get<SubCategory[]>(this.url+'GetSubCategory/'+Cid,Requestheaders);
}

      // public Delete(item:Items):Observable<any>{
      //   return this.http.delete<any>(this.url+'Delete/'+id,JSON.stringify(item),Requestheaders);}


  }

