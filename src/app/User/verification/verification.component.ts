import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../Service/UserServices/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  error:string = "";
  authRequest:any={
    "email":localStorage.getItem('email'),
    "code":''

  }

  constructor(private _service:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

verifyUser(){
  this._service.verification(this.authRequest).subscribe(data => {
    this.router.navigateByUrl("/Login").then(() => {
    window.location.reload();

    } )},
    err => {
      if (err?.status === 409) {
        this.error = 'Verification Code is Incorrect ! ';
      } else if (err?.status === 404) {
        this.error = 'Wrong or Unexisting Email ! ';
      } else if (err?.status === 503) {
        this.error = 'User Already Verified ! ';
      }
    }



  );

}
}
