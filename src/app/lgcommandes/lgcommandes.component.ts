import { Component, OnInit } from '@angular/core';
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {ReclamationService} from "../reclamationservice/reclamation.service";

@Component({
  selector: 'app-lgcommandes',
  templateUrl: './lgcommandes.component.html',
  styleUrls: ['./lgcommandes.component.css']
})
export class LgcommandesComponent implements OnInit {
listelgcommandes!:Lignecommande[];
  page:number=1;
  constructor(private recserv:ReclamationService) { }

  ngOnInit(): void {
    this.recserv.getlgcommandes().subscribe({
      next: (data) => this.listelgcommandes = data
    });
  }

}
