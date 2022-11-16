import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  URL_EVENT="http://localhost:8081/SpringMVC/api/Events";
  constructor(private _http:HttpClient) { }


  addEvent(eventA:Event){
    return this._http.post(this.URL_EVENT,eventA);
  }
  getEvent(){
    return this._http.get<Event[]>(this.URL_EVENT);
  }
DeleteEvent(id:any){
    return this._http.delete(this.URL_EVENT+'/'+id);
  }
  UpdateEvent(id:any,event:Event){
    return this._http.put(this.URL_EVENT+'/'+id,event);
  }
  getEventById(id:any){
    return this._http.get<Event>("http://localhost:8081/SpringMVC/api/retrieve-event/"+id);
  }
}