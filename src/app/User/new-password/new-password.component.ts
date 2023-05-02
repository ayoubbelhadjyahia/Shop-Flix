import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Service/UserServices/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  error:string = "";
  authRequest:any={
    "verificationCode":'',
    "newPassword":'',

  };

  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  resetUser(){
    this._service.resetPassword(this.authRequest).subscribe(data => {
      this.router.navigateByUrl("/Login").then(() => {
        window.location.reload();
      }); },


      err => {
        if (err?.status === 404) {
          this.error = 'Wrong Recovery Code !';
        }
      }


    );
  }

}
