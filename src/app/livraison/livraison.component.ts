import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../livraison.service';
import { Livraison } from '../model/livraison';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  constructor(private service:LivraisonService) { }
  Livraison:Livraison=new Livraison(0,"","","",0,"");
  message:any;

  ngOnInit(): void {

  }

  public register(){
    let add =this.service.addLivraison(this.Livraison)
    add.subscribe((data)=>this.message=data)
    alert("Ajouté avec succés!")
  }


}
