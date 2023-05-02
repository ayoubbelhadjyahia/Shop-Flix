import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {user} from "../../Model/User/User";
import {Lignecommande} from "../../Model/PanierR/lignecommande";
import {ReclamationService} from "../../reclamationservice/reclamation.service";

@Component({
  selector: 'app-meilleuremploye',
  templateUrl: './meilleuremploye.component.html',
  styleUrls: ['./meilleuremploye.component.css']
})
export class MeilleuremployeComponent implements OnInit {
  user!:user;


  constructor(private recserv:ReclamationService) { }

  ngOnInit(): void {  this.recserv.getEmployeeOfTheMonth().subscribe(
    (user) => {
      this.user = user;
    } );



  }


}
