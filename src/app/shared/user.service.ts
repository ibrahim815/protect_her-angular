import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl="SpringMVC/api/Users";
  constructor(private _http:HttpClient) { }


  addUser(user:User){
    return this._http.post<User>("http://localhost:8081/SpringMVC/api/Users",user);
  }

}
