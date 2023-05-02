import { Component } from '@angular/core';
import {user} from "./Model/User/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-Flix';


  currentUser!:user;
}
