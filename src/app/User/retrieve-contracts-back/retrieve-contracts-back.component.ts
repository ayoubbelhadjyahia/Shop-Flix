import { Component, OnInit } from '@angular/core';
import {user} from "../../Model/User/User";
import {contract} from "../../Model/User/contract";
import {UserService} from "../../Service/UserServices/user.service";

@Component({
  selector: 'app-retrieve-contracts-back',
  templateUrl: './retrieve-contracts-back.component.html',
  styleUrls: ['./retrieve-contracts-back.component.css']
})
export class RetrieveContractsBackComponent implements OnInit {
  pages:number=1;
  listContracts! : contract[];
  constructor(private _service:UserService) { }

  ngOnInit(): void {
    this._service.getAllContracts().subscribe(res=>{console.log(res);
      this.listContracts=res});

  }

}
