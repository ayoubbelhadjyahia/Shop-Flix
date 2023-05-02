import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../reclamationservice/reclamation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-Detalslg',
  templateUrl: './detailsinter.component.html',
  styleUrls: ['./detailsinter.component.css']
})
export class DetailsinterComponent implements OnInit {
  idLigneCommande!:any;
  constructor(private recserv:ReclamationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.idLigneCommande=params.get('idLigneCommande');
    });
    console.log(this.idLigneCommande);

  }


}

