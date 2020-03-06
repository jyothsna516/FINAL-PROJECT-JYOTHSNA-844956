import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { Purchasehistorytranscation } from '../Models/purchasehistorytranscation';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
//constructor(){}
  //constructor(private http:HttpClient) { }
   url:string="https://localhost:44317/Buyer/"
   constructor(private http:HttpClient) { }
    public UpdateDetails(buyer:Buyer):Observable<any>{
     
  return this.http.put<any>(this.url+'UpdateDetails',JSON.stringify(buyer),Requestheaders);
}
public GetProfile(bid:string):Observable<Buyer>
{
  return this.http.get<Buyer>(this.url+'GetProfile/'+bid);

}
public Editprofile(buyer:Buyer):Observable<any>
{
  return this.http.put<any>(this.url+'Editprofile',JSON.stringify(buyer),Requestheaders);
}
// public GetAllItems():Observable<any>{
//   return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
// }
public Search(itemname:string):Observable<any>
{
  return this.http.get<any>(this.url+'Search/'+itemname);
}
// public BuyItem(item:Purchasehistorytranscation):Observable<Purchasehistorytranscation[]>
// {
//   return this.http.post<>
  //return this.http.post<Purchasehistorytranscation>(this.url+'BuyItem/',transactionhistory,Requestheaders);
// }
public GetAllItems():Observable<any>{
  return this.http.get<any>(this.url+'getallitems',Requestheaders);
}

// public Myprofile(id:number):Observable<any>
//  {
//  return this.http.get<any>(this.url+'get'+'/'+id);
//  }
//  edit(item:Buyer):Observable<any>
//  {
//  return this.http.put<any>(this.url+'Edit',item);
//  }
}
  //     return this.http.post<any>(this.url+'Additem',JSON.stringify(item),Requestheaders);}
  //     public ViewItem(id:string):Observable<Items>{
  //       return this.http.get<Items>(this.url+'GetAll/'+id,Requestheaders);



