import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import {Seller} from 'src/app/Models/seller';
import { Items } from 'src/app/Models/items';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string="https://localhost:44317/Item/"
  constructor(private http:HttpClient) { }
    public AddItem(item:Items):Observable<any>{
      return this.http.post<any>(this.url+'Additem',JSON.stringify(item),Requestheaders);}
      public ViewItem(id:string):Observable<Items>{
        return this.http.get<Items>(this.url+'GetAll/'+id,Requestheaders);
}

      // public Delete(item:Items):Observable<any>{
      //   return this.http.delete<any>(this.url+'Delete/'+id,JSON.stringify(item),Requestheaders);}


  }

