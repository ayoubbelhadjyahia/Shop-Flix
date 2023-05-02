import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductServService} from "../../Service/ProductServ/product-serv.service";
import {Product} from "../../Model/Product/Product";
import {ConsumerPanierService} from "../../Service/PanierSer/consumer-panier.service";
import {UserService} from "../../Service/UserServices/user.service";
import {Lignecommande} from "../../Model/PanierR/lignecommande";
import {panier} from "../../Model/PanierR/panier";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  idProduct!:number;
  idPanierr!:number;
  ligneCommande=new Lignecommande();
   id!:number
  product!:Product

  constructor(private user :UserService,private panierR:ConsumerPanierService, private route : ActivatedRoute,private constr:ProductServService ,private router :Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.constr.getOneProduct(this.id).subscribe({next:(data)=>this.product=data,
    });
  }
  // addToCart(product: Product) {
  //   this.ConsumerPanierService.addToCart(product);
  //   console.log('Your product is added to Cart successfully');
  // }

  addToLigneCommande(){
  //const user:string|null =localStorage.getItem('user');
  //if(user){
    //const data :any=this.user.getUserUsername(user);
    //const idUser : number=data.id;
    const idUser:number=1;
    this.panierR.getPanierByUser(idUser).subscribe(data=>{console.log(data);
      this.idPanierr=data.idPanier;
    //console.log(this.Panier)
    this.idProduct=this.id;
    return this.panierR.addLigneCommande(this.idPanierr,this.idProduct,this.ligneCommande.quantiteProduit).subscribe(()=>this.router.navigateByUrl("/Cart"));
    }) ;
  //}
  //return null;
  }

}
