import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
//constructor(){}
  //constructor(private http:HttpClient) { }
   url:string="https://localhost:44317/"
   constructor(private http:HttpClient) { }
    public UpdateDetails(buyer:Buyer):Observable<any>{
     
  return this.http.put<any>(this.url+'UpdateDetails',JSON.stringify(buyer),Requestheaders);
}
public GetProfile(bid:string):Observable<Buyer>
{
  return this.http.get<Buyer>(this.url+'GetProfile/'+bid,Requestheaders);

}
public Editprofile(buyer:Buyer):Observable<any>
{
  return this.http.put<any>(this.url+'Editprofile',JSON.stringify(buyer),Requestheaders);
}
  //     return this.http.post<any>(this.url+'Additem',JSON.stringify(item),Requestheaders);}
  //     public ViewItem(id:string):Observable<Items>{
  //       return this.http.get<Items>(this.url+'GetAll/'+id,Requestheaders);
}


