import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../Service/LivServ/livraison.service';
import { Livraison } from '../model/Livraison/livraison';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  constructor(private service:LivraisonService,private toastr:ToastrService) { }
  Livraison:Livraison=new Livraison();
  message:any;


  ngOnInit(): void {

  }

  public register(){
    let add =this.service.addLivraison(this.Livraison)
    add.subscribe((data)=>this.message=data)
    this.toastr.success('La livraison a été ajouté avec succès', 'Succès');

  }


}
