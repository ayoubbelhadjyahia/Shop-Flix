import { Component, OnInit } from '@angular/core';
import {AuthInterceptor} from "../auth.interceptor";
import {UserService} from "../Services/UserServices/user.service";
import {user} from "../Models/User";

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
