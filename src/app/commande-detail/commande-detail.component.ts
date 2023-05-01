import { Component, OnInit } from '@angular/core';
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {Product} from "../Model/Product/Product";
import {Commande} from "../Model/PanierR/commandepanier";

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {
  id!:number;
  lignecommande!:Lignecommande[];
  idUser:number=1;
  p!:Product[];
  productId!:number;
  idLigneCommande!:number;
  idCommande!:number;
  C!:Commande;
  constructor(private panierServ:ConsumerPanierService,private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.panierServ.getCommandeById(this.idCommande).subscribe();
    console.log(this.idCommande)
  }

  protected readonly Commande = Commande;
}
