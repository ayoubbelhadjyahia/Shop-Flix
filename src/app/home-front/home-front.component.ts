import { Component, OnInit } from '@angular/core';
import {AuthInterceptor} from "../auth.interceptor";
import {UserService} from "../Service/UserServices/user.service";
import {user} from "../Model/User/User";

@Component({
  selector: 'app-home-front',
  templateUrl: './home-front.component.html',
  styles: [
  ]
})
export class HomeFrontComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {


  }

}
