import { Component, OnInit } from '@angular/core';
import { Livreur } from '../model/Livraison/livreur';
import { LivraisonService } from '../Service/LivServ/livraison.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  message: any;
  NewLivreur:Livreur=new Livreur();
  livreurstatus = Object.values(Livreur);


  constructor(private service:LivraisonService) { }

  ngOnInit(): void {
  }

   //////////
  //ADD
  public addLivreur(){
    let add =this.service.addlivreur(this.NewLivreur)
    add.subscribe((data)=>this.message=data)
    alert("Ajouté avec succés!")
  }
  

}
