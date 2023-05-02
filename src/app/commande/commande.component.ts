import {Component, OnInit} from '@angular/core';
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {Commande} from "../Model/PanierR/commandepanier";
import {UserService} from "../Service/UserServices/user.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {


  idLigneCommande!:number;
  id!:number;
  idPanier!:number;
  adresse!:string;

  constructor(private _user:UserService,private consumerPanierService:ConsumerPanierService) { }

  ngOnInit(): void {
      }
  confirmerCommande(): void {
    const idUser: number = 1;

    this.consumerPanierService.getPanierByUser(idUser).subscribe(data=>{ this.idPanier=data.idPanier ;
      this.consumerPanierService.getLigneCommandePanier(this.idPanier).subscribe(data=>{this.idLigneCommande=data[0].idLigneCommande;
        this.consumerPanierService.addCommande(this.adresse,idUser,this.idLigneCommande)});})


}}
