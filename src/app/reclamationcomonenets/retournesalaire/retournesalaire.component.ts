import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import {ActivatedRoute} from "@angular/router";
import {Livreur} from "../../Model/livreur";

@Component({
  selector: 'app-retournesalaire',
  templateUrl: './retournesalaire.component.html',
  styleUrls: ['./retournesalaire.component.css']
})
export class RetournesalaireComponent implements OnInit {
idrec!:any;
livreur!:Livreur;
  constructor(private recserv:ReclamationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.idrec=params.get('idrec');
    });
    this.getretournesalaire(this.idrec);
  }

getretournesalaire(idrec:any){

    this.recserv.retournesalaire(idrec).subscribe((res)=>{
      this.livreur=res;});

}
}
