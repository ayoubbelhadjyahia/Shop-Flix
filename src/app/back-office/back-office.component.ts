import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styles: [
  ]
})
export class BackOfficeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
