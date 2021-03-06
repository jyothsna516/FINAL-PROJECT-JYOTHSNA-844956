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
url:string="http://localhost:51050/User/"
  constructor(private http:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>{
    return this.http.post<any>(this.url+'BRegister',JSON.stringify(buyer),Requestheaders);}
  
  public SellerRegister(seller:Seller):Observable<any>{
    return this.http.post<any>(this.url+'SRegister',JSON.stringify(seller),Requestheaders);
  }
  public BuyerLogin(uname:string,pwd:string):Observable<any>{
    return this.http.get<any>(this.url+'blogin/'+uname+'/'+pwd,Requestheaders);}
  
  public SellerLogin(uname:string,pwd:string):Observable<any>{
    return this.http.get<any>(this.url+'slogin/'+uname+'/'+pwd,Requestheaders);}
  }

