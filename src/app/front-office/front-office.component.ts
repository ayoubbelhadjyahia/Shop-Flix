import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../Service/UserServices/user.service";
import {user} from "../Model/User/User";

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styles: [
  ]
})
export class FrontOfficeComponent implements OnInit {
  user!:user;

  constructor(public router: Router,public _users : UserService) { }

  ngOnInit(): void {
    const username:any=localStorage.getItem('currentUser');
    if(username) {
      this._users.getUserUsername(username).subscribe(data => {
        console.log(data);
        this.user=data;

      });
    }
    else {
      this.router.navigateByUrl("Error").then(() => {
        window.location.reload();
      });
    }
  }

}
