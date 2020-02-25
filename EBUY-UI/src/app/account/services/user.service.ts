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
  public BuyerLogin(username:string,password:string):Observable<Buyer>  
  {
    return this.http.get<Buyer>(this.url+"blogin/"+username+password,Requestheaders);
  }
  public SellerLogin(username:string,password:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+"slogin/"+username+password,Requestheaders);
  }
  public BuyerRegister(buyer:Buyer):Observable<Buyer>{
    return this.http.get<Buyer>(this.url+'BRegister/'+buyer,Requestheaders);
  }
  public SellerRegister(seller:Seller):Observable<Seller>{
    return this.http.get<Seller>(this.url+'SRegister/'+seller,Requestheaders);
  }
}
