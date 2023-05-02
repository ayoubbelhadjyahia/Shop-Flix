import { Component, OnInit } from '@angular/core';
import { Livreur } from '../model/Livraison/livreur';

import { LivraisonService } from '../Service/LivServ/livraison.service';
import { Statut_livreur } from '../model/Livraison/statutlivreur';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-livreur',
  templateUrl: './all-livreur.component.html',
  styleUrls: ['./all-livreur.component.css']
})
export class AllLivreurComponent implements OnInit {
  editing = false;
  NewLivreur:Livreur=new Livreur();
  message:any;
  livreurs: any;
  idLivreur:any;
  livreurstatus = Object.values(Statut_livreur);

  
 // meilleurEmploye: string;


  constructor(private router: Router,private service:LivraisonService) { }

  ngOnInit(): void {
    let resp=this.service.retrieveAllLivreur();
    resp.subscribe((data)=>this.livreurs=data);
    
  }


  redirectToPage() {
    this.router.navigate(['/admin/bestemployer']) ;
  }
  
/////////////
  //STATUT
  public async retournestatut() {
    const x2 = 'value1';
    const y2 = 'value2';
    await this.service.activer(x2, y2);
  }
  ///////////////////
  //AjoutBonus
  ajouterBonus(idLivreur: number) {
    this.service.ajouterunbonus(idLivreur).subscribe();
  }
  
  ajouterUnBonus(idLivreur: number) {
    this.service.ajouterunbonusadd(idLivreur).subscribe();
  }
  ///////////
  //DELETE
  deleteLivreur(id:number) {
    let v = this.service.deleteLivreur(id);
    v.subscribe((data)=>this.livreurs=data);
  }
 
  
  //////////
  //UPDATE
  updateLivreur(livreur:Livreur){
    this.NewLivreur = livreur;
    this.editing = true;
  }
  
  public register(){
    this.service.addlivreur(this.NewLivreur)
    .subscribe(()=>{
      this.editing =false;
      this.livreurs =new Livreur();
      this.loadLivreurs();});
  }
   loadLivreurs(){
    let resp=this.service.retrieveAllLivreur();
      resp.subscribe((data)=>this.livreurs=data);
   }

   //////////////
   //Search
   getLivreurById(idLivreur:any){
    if(this.idLivreur == ""){
      this.ngOnInit();
    }else{
      this.livreurs=this.livreurs.filter((res: { idLivreur:any; }) =>{
        return res.idLivreur.match(this.idLivreur);
      })
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////


  
}
