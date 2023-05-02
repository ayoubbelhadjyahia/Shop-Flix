import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailsreclamation',
  templateUrl: './detailsreclamation.component.html',
  styleUrls: ['./detailsreclamation.component.css']
})
export class DetailsreclamationComponent implements OnInit {
  reclamation!:any;
  listerec!:Reclamation[];
  idrec!:any;
rec!:any;
  constructor(private recserv:ReclamationService,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.idrec=params.get('idrec');
    });
    console.log(this.idrec);
   this.getrecbyid(this.idrec);
  }

getrecbyid(idrec:any){
  this.recserv.getreclamationbyid(idrec).subscribe((res)=>{
    this.reclamation=res;});

}
}
