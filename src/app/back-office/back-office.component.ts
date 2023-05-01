import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {user} from "../Model/User/User";
import {UserService} from "../Service/UserServices/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styles: [
  ]
})
export class BackOfficeComponent implements OnInit {
  user!:user;

  constructor(public router: Router, public _users : UserService) { }

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
  logout(){
    this.router.navigateByUrl("/Login").then(() => {
      window.location.reload();
    })

  }

  protected readonly name = name;
}
