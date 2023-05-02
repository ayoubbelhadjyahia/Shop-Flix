import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Service/UserServices/login.service";
import {UserService} from "../../Service/UserServices/user.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {ERoleEnum} from "../../Model/User/ERole.enum";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string = "";
  errorforget:string = "";
  fogotRequest : any={
    "email":''
  }
  authRequest:any={
    "username":'',
    "password":''
  };

  constructor(private _service:LoginService, private router:Router , private _user : UserService) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  login(){
     return this._service.authenticateUser(this.authRequest).subscribe( data => {
       localStorage.setItem('token',data);
       if(data) {

         const token = localStorage.getItem('token');

         if (token) {
           // Decode the token
           const decodedToken: any = jwt_decode(token);
           localStorage.setItem('currentUser', decodedToken.sub);
           this._user.getUserUsername(decodedToken.sub).subscribe(data => {
             console.log(data);
             switch (data.roles[0].name) {
               case ERoleEnum.ROLE_ADMIN: {
                 this.router.navigateByUrl("").then(() => {
                   window.location.reload();
                 });
                 break;
               }
               case ERoleEnum.ROLE_CLIENT: {
                 this.router.navigateByUrl("").then(() => {
                   window.location.reload();
                 });
                 break;
               }
               case ERoleEnum.ROLE_MODERATOR: {
                 this.router.navigateByUrl("/admin").then(() => {
                   window.location.reload();
                 });
                 break;
               }
             }
           })

         }
       }

     }, err => {
         if (err?.status === 401) {
           this.error = 'Wrong Username Or Password ! ';
         }
       }
     );


  }

  forgot(){
    return this._service.forgotPassword(this.fogotRequest).subscribe( data => {
      this.router.navigateByUrl("/newpassword").then(() => {
        window.location.reload();
    })


  },err => {
        if (err?.status === 404) {
          this.errorforget = 'Wrong Email';
        }
      }
      );

  }


}
