import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Service/UserServices/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error:string = "";
  message:string="Enter your Informations To Register"
  authRequest:any={
    "username":'',
    "firstName":'',
    "lastName":'',
    "email":'',
    "password":'',
    "cinUser":'',
    "phoneNumber":'',
  };

  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {

  }
  register(){
    this._service.addUser(this.authRequest).subscribe(data => {
      this.message="We Are Sending You A Verification Email"
      localStorage.setItem('email',this.authRequest.email);
      this.router.navigateByUrl("/verification").then(() => {
        window.location.reload();
      }); },


      err => {
        if (err?.status === 409) {
          this.error = 'Username already exists';
        } else if (err?.status === 400) {
          this.error = 'Email already exists';
        } else if (err?.status === 500) {
          this.error = 'Wrong Email Address';
        } else if (err?.status === 404) {
          this.error = 'Username Not Found';
        } else if (err?.status === 503) {
          this.error = 'Email Not Found';
        }
      }


      );
  }

}
