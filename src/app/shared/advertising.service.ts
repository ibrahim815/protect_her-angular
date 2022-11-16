import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertising } from '../model/Advertising';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  URL_Advertising="http://localhost:8081/SpringMVC/api/Advertisings";
  constructor(private _http:HttpClient) { }

  addEvent(advertisingA:Advertising){
    return this._http.post(this.URL_Advertising,advertisingA);
  }

getAdvertising(){
  return this._http.get<Advertising[]>(this.URL_Advertising);
}
DeleteAdvertising(id:any){
  return this._http.delete(this.URL_Advertising+'/'+id);
}
UpdateAdvertising(id:any,advertising:Advertising){
  return this._http.put(this.URL_Advertising+'/'+id,advertising);
} 
getAdvertisingById(id:any){
  return this._http.get<Advertising>("http://localhost:8081/SpringMVC/api/retrieve-advertising/"+id);
}

}
