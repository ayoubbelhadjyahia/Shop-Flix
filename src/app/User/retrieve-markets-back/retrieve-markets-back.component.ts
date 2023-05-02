import { Component, OnInit } from '@angular/core';
import {user} from "../../Model/User/User";
import {market} from "../../Model/User/market";
import {UserService} from "../../Service/UserServices/user.service";

@Component({
  selector: 'app-retrieve-markets-back',
  templateUrl: './retrieve-markets-back.component.html',
  styleUrls: ['./retrieve-markets-back.component.css']
})
export class RetrieveMarketsBackComponent implements OnInit {
  listMarkets! : market[];

  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this._service.getAllMarkets().subscribe(res=>{console.log(res);
      this.listMarkets=res});
  }

}
