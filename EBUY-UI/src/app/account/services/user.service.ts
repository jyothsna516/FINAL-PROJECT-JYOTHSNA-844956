import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import {Seller} from 'src/app/Models/seller';
import { Buyer } from 'src/app/Models/buyer';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string="https://localhost:44317/User/"
  constructor(private http:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>{
    return this.http.post<any>(this.url+'BRegister',JSON.stringify(buyer),Requestheaders);}
  
  public SellerRegister(seller:Seller):Observable<any>{
    return this.http.post<any>(this.url+'SRegister',JSON.stringify(seller),Requestheaders);
  }
}
