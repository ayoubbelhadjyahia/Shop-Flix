import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../reclamationservice/reclamation.service";
import {Intervention} from "../Model/Reclamation/Intervention";
import {Reclamation} from "../Model/Reclamation/Reclamation";
import {EditrecComponent} from "../reclamationcomonenets/editrec/editrec.component";
import {MatDialog} from "@angular/material/dialog";
import {EditinterventionComponent} from "../editintervention/editintervention.component";

@Component({
  selector: 'app-listeintervention',
  templateUrl: './listeintervention.component.html',
  styleUrls: ['./listeintervention.component.css']
})
export class ListeinterventionComponent implements OnInit {
Listeinter!:Intervention[];
  page:number=1;
  intervention!:Intervention;
  constructor(private recserv:ReclamationService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recserv.getinterventions().subscribe({
      next: (data) => this.Listeinter = data
    })
  }
  deletein (idinter:number)
  {
    this.recserv.deleteinter(idinter).subscribe({next:()=>this.ngOnInit()});
  };
  editinter(intervention:Intervention){
    //this.recserv.editrec(reclamation).subscribe({next:()=>this.ngOnInit()});
    const dialogRef = this.dialog.open(EditinterventionComponent,{
      width: '60%',
      data: intervention
    });

}}
