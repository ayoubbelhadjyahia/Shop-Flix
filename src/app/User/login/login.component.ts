import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Services/UserServices/login.service";
import {UserService} from "../../Services/UserServices/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authRequest:any={
    "username":'',
    "password":''
  };

  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
     return this._service.authenticateUser(this.authRequest).subscribe( data => {
       this.router.navigate(['']);
     });
  }

}
