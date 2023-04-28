import { Component, OnInit } from '@angular/core';
import{UserService} from "../../Services/UserServices/user.service";
import{user} from "../../Models/User";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-modify-users-back',
  templateUrl: './modify-users-back.component.html',
  styleUrls: ['./modify-users-back.component.css']
})
export class ModifyUsersBackComponent implements OnInit {
  user!: user;
  id!:number;


  constructor(private _service: UserService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this._service.getUser(this.id).subscribe({next:(data)=>this.user=data
    });


  }
  updateUser(){
    this._service.modifyUser(this.user).subscribe(()=>this.router.navigateByUrl("/admin/retrieveusersback"));
  }

}
