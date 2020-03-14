import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { Purchasehistorytranscation } from '../Models/purchasehistorytranscation';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
//constructor(){}
  //constructor(private http:HttpClient) { }
   url:string="http://localhost:51050/Buyer/"
   constructor(private http:HttpClient) { }
    public UpdateDetails(buyer:Buyer):Observable<any>{
     
  return this.http.put<any>(this.url+'UpdateDetails',JSON.stringify(buyer),Requestheaders);
}
public GetProfile(bid:string):Observable<Buyer>
{
  return this.http.get<Buyer>(this.url+'GetProfile/'+bid);

}

// public GetAllItems():Observable<any>{
//   return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
// }
public Search(itemName:string):Observable<any>
{
  return this.http.get<any>(this.url+'Search/'+itemName);
}
public BuyItem(item:Purchasehistorytranscation):Observable<any>{
  return this.http.post<any>(this.url+'BuyItem',item,Requestheaders);
}
public EditProfile(buyer:Buyer):Observable<Buyer>
{
  return this.http.put<Buyer>(this.url+'EditProfile',buyer,Requestheaders);
}
// public BuyItem(item:Purchasehistorytranscation):Observable<Purchasehistorytranscation[]>
// {
 
//   return this.http.post<Purchasehistorytranscation>(this.url+'BuyItem',item,Requestheaders);
// }
public GetAllItems():Observable<any>{
  return this.http.get<any>(this.url+'getallitems',Requestheaders);
}
public AddtoCart(cart:Cart):Observable<any>{
  return this.http.post<any>(this.url+'Addtocart',cart);
}
public GetCartItems(bid:string):Observable<any>
{
  return this.http.get<any>(this.url+'Getcartitems/'+bid,Requestheaders);
}
public RemoveCartItem(id:string):Observable<Cart>
{
  return this.http.delete<Cart>(this.url+'Removeitem/'+id,Requestheaders);
}
public  GetcartByid(bid:string):Observable<Cart>{
  return this.http.get<Cart>(this.url+'GetCartId/'+bid,Requestheaders);
}
public GetCount(Bid:string):Observable<any>
{
  console.log(Requestheaders);
  return this.http.get<any>(this.url+'Getcount/'+Bid,Requestheaders);
}


}
 


