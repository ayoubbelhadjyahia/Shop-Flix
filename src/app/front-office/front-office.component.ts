import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styles: [
  ]
})
export class FrontOfficeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
