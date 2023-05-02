import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {user} from "../../Model/User/User";
import {AuthInterceptor} from "../../auth.interceptor";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  getAllUsers() : Observable<user[]> {
    return this._http.get<user[]>("http://localhost:8188/SpringMVC/user/all");}

  getUser(id:number) : Observable<user>{
    return this._http.get<user>(`http://localhost:8188/SpringMVC/user/get/`+id);
  }

  modifyUser(user:user){
    return this._http.put(`http://localhost:8188/SpringMVC/user/update`,user);
  }
  getUserUsername(username:string) : Observable<user>{
    return this._http.get<user>(`http://localhost:8188/SpringMVC/user/username/`+username);

  }










}
