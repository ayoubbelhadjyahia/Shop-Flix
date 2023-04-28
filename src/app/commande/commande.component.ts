import {Component, OnInit} from '@angular/core';
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {Commande} from "../model/PanierR/commandepanier";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private consumerPanierService:ConsumerPanierService) { }

  ngOnInit(): void {


  }

}
