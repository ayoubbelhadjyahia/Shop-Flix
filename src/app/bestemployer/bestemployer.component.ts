import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../Service/LivServ/livraison.service';
import { Livreur } from '../model/Livraison/livreur';
import { user } from '../Model/User/User';
@Component({
  selector: 'app-bestemployer',
  templateUrl: './bestemployer.component.html',
  styleUrls: ['./bestemployer.component.css']
})
export class BestemployerComponent implements OnInit {
  livreur:Livreur =new Livreur();
  bestemployer!:any;
  user:user=new user();

  constructor(private service:LivraisonService) { }

  ngOnInit(): void {
    this.service.Meilleurlivreurdumois().subscribe(
      (livreur) => {
        this.livreur = livreur;} );
  }
 
  
}
