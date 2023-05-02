import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../reclamationservice/reclamation.service";
import {ActivatedRoute} from "@angular/router";
import {Intervention} from "../Model/Reclamation/Intervention";
import {Reclamation} from "../Model/Reclamation/Reclamation";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detailslg',
  templateUrl: './detailslg.component.html',
  styleUrls: ['./detailslg.component.css']
})
export class DetailslgComponent implements OnInit {
  idLigneCommande!:any;
reclamation: Reclamation = new Reclamation();
  constructor(private recserv:ReclamationService,private route:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.idLigneCommande=params.get('idLigneCommande');

    });
    console.log(this.idLigneCommande);
   // this.getrecbyid(this.idrec);
  }
  ajouterrec(){
    this.recserv.addreclamation(this.idLigneCommande,this.reclamation).subscribe(
      (response: any) => {
        this.toastr.success('La réclamation a été ajouté avec succès', 'Succès');
        console.log('Reclamation ajoutée avec succès !');
        console.log(response);
        console.log(this.reclamation);

      }
    );

  }

 // getrecbyid(idrec:any){
   // this.recserv.getreclamationbyid(idrec).subscribe((res)=>{
     // this.reclamation=res;});

  //}
}
