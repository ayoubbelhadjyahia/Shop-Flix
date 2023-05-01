import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {panier} from "../Model/PanierR/panier";
import {Product} from "../Model/Product/Product";
import {Lignecommande} from "../Model/PanierR/lignecommande";

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styles: [
  ]
})
export class FrontOfficeComponent implements OnInit {
  panier!:panier[];
  lignecommande!:Lignecommande[];
  idUser:number=1;
  p!:Product[];
  idPanier:number=3;
  productId!:number;
  idLigneCommande!:number;

  constructor(private panierServ:ConsumerPanierService,private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    console.log('testtt')
              this.panierServ.addPanierandaffectoUser(this.idUser).subscribe();
              console.log('panierid=',this.idPanier)
              this.getPanier()
        this.panierServ.getLigneCommandePanier(this.idPanier).subscribe({next:(data)=> this.lignecommande=data});
console.log(this.lignecommande)
   }

  getPanier() {
    this.panierServ.getPanier(this.idPanier).subscribe((result) => {
      console.log('result=',result)
      this.panier = result;
      this.panierServ.deletePanier(this.idPanier)
    });
  }
  getLigneCommande() {
console.log(this.idPanier)
    this.panierServ.getLigneCommandePanier(this.idPanier).subscribe((result) => {
      console.log('result=', result)

      this.lignecommande = result;
    });
  }











  //C BON FL DETAILPRODUCT
  //addLigneCommande(){
  //   console.log('test ligne commande')
  //   this.panierServ.addLigneCommande(this.lignecommande, this.idPanier, this.productId)
  //     .subscribe(result => console.log(result));




    // this.panierServ.addLigneCommande(this.idPanier,this.productId).subscribe({
    //   next:()=>this.router.navigateByUrl("/Cart")});

  // }

  // addproductToPanier() {
  //
  //   this.panierServ.addProductToPanier(this.productId).subscribe((result:Product[]) => {
  //     console.log('result=',result)
  //
  //     this.p= result;
  //   });





}
