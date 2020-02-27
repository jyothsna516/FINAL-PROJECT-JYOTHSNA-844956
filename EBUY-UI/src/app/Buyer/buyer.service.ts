import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url:string="https://localhost:44317//"
  constructor(private http:HttpClient) { }
    public AddItem(item:Items):Observable<any>{
      return this.http.post<any>(this.url+'Additem',JSON.stringify(item),Requestheaders);}
      public ViewItem(id:string):Observable<Items>{
        return this.http.get<Items>(this.url+'GetAll/'+id,Requestheaders);
}

}
