import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {ReclamationService} from "../../reclamationservice/reclamation.service";
enum sujetrec {
  produit='produit',
  livreur='livreur',
  serivicedesite='serivicedesite'

}
@Component({
  selector: 'app-getrec',
  templateUrl: './getrec.component.html',
  styleUrls: ['./getrec.component.css']
})
export class GetrecComponent implements OnInit {
  listerec!: Reclamation[];
  reclamation!: Reclamation;
  data!:any;
sujetrec1=sujetrec;
  page:number=1;

  constructor(public recserv: ReclamationService) { }

  ngOnInit(): void {
   
    this.reclamation=new Reclamation();
    this.recserv.getreclamation().subscribe({
      next: (data) => this.listerec = data
    });
  }
  delete (idrec:number)
  {
    this.recserv.delete(idrec).subscribe({next:()=>this.ngOnInit()});
  };
}
