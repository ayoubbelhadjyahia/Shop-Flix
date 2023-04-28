import { Component, OnInit } from '@angular/core';
import{UserService} from "../../Service/UserServices/user.service";
import{user} from "../../Model/User/User";


@Component({
  selector: 'app-retrieve-users-back',
  templateUrl: './retrieve-users-back.component.html',
  styleUrls: ['./retrieve-users-back.component.css']
})
export class RetrieveUsersBackComponent implements OnInit {
  listUsers! : user[];

  constructor(private _service:UserService) { }

  ngOnInit(): void {this._service.getAllUsers().subscribe(res=>{console.log(res);
    this.listUsers=res});
  }


}
