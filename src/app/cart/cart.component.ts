import { Component, OnInit } from '@angular/core';
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {panier} from "../Model/PanierR/panier";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServService} from "../Service/ProductServ/product-serv.service";
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {Product} from "../Model/Product/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id!:number;
  panier!:panier[];
  lignecommande!:Lignecommande[];
  idUser:number=1;
  p!:Product[];
  idPanier:number=3;
  productId!:number;
  idLigneCommande!:number;
  idCommande!:number;

  constructor(private panierServ:ConsumerPanierService,private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.panierServ.getPanier(this.id).subscribe({next:(data)=>this.panier=data});
    console.log('testtt')
    this.panierServ.addPanierandaffectoUser(this.idUser).subscribe();
    console.log('panierid=',this.idPanier)
    this.getPanier()


    this.panierServ.getLigneCommandePanier(this.idPanier).subscribe({next:(data)=> this.lignecommande=data});
    console.log(this.lignecommande)
    this.panierServ.getSimilarProduct(this.productId,this.idCommande);

}
  getPanier() {
    this.panierServ.getPanier(this.idPanier).subscribe((result) => {
      console.log('result=',result)
      this.panier = result;
    });
  }
  deleteLigneCommande(idLigneCommande:number){
      this.panierServ.deleteLigneCommande(idLigneCommande).subscribe({next:()=>this.ngOnInit()});
    }

    protected readonly ProductServService = ProductServService;


}
