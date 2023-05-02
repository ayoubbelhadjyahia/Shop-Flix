import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../reclamationservice/reclamation.service";
import {Intervention} from "../Model/Reclamation/Intervention";

@Component({
  selector: 'app-addintervention',
  templateUrl: './addintervention.component.html',
  styleUrls: ['./addintervention.component.css']
})
export class AddinterventionComponent implements OnInit {
  intervention: Intervention = new Intervention();
  constructor(private recserv:ReclamationService) { }

  ngOnInit(): void {

  }
add(){
  this.recserv.addintervention(this.intervention).subscribe(
    response => {
      console.log('Intervention ajoutée avec succès !');
      console.log(response);
    });
}
}
