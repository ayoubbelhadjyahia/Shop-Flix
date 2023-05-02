import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../Service/LivServ/livraison.service';
import { Livraison } from '../model/Livraison/livraison';
import { Type_livraison } from '../model/Livraison/typelivraison';
import { FactureCommande } from '../model/PanierR/facturepanier';


@Component({
  selector: 'app-all-livraisonsfront',
  templateUrl: './all-livraisonsfront.component.html',
  styleUrls: ['./all-livraisonsfront.component.css']
})
export class AllLivraisonsfrontComponent implements OnInit {

  message:any;
  NewLivraison:Livraison=new Livraison();
  typelivraison = Object.values(Type_livraison);
  listfactures: FactureCommande[];

  constructor(private service:LivraisonService) { }

  ngOnInit(): void {
  }

  onButtonClick(idfacture: number) {
    this.addLivraison();
    this.calculerPT(idfacture);
    window.location.reload();
  }


  public addLivraison(){
    let add =this.service.addLivraison(this.NewLivraison)
    add.subscribe((data)=>this.message=data)
    alert("Ajouté avec succés!")
  }

  calculerPT(idfacture:any){
    let add =this.service.calculerPrixTotal(idfacture)
    add.subscribe((data)=>this.message=data)
  }

}
