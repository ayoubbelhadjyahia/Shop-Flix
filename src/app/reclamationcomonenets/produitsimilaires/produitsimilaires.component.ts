import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../Model/Product/Product";

@Component({
  selector: 'app-produitsimilaires',
  templateUrl: './produitsimilaires.component.html',
  styleUrls: ['./produitsimilaires.component.css']
})
export class ProduitsimilairesComponent implements OnInit {
  listeproduct!:Product[];
  idrec!:any;
  page:number=1;

  constructor(private recserv:ReclamationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.idrec=params.get('idrec');
    });
    this.recprodsimilaires(this.idrec);
  }
  recprodsimilaires(idrec:any){
    this.recserv.getproduitsimilaires(idrec).subscribe((res)=>{
      this.listeproduct=res;});

  }

}
