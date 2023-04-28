import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {UserService} from "./user.service";
import {user} from "../../Models/User";



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!:Observable<user>;

  constructor(private http: HttpClient,private _service : UserService) { }

  public authenticateUser(request:any) {
    return this.http.post<any>("http://localhost:8188/SpringMVC/auth/signin", request, {  responseType: 'text' as 'json' })
  }


}
