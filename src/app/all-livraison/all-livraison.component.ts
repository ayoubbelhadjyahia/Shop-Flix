import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../livraison.service';
import { Livraison } from '../model/livraison';

@Component({
  selector: 'app-all-livraison',
  templateUrl: './all-livraison.component.html',
  styleUrls: ['./all-livraison.component.css']
})
export class AllLivraisonComponent implements OnInit {
  livraisons:any;
  nomdestinataire:any;
  editing = false;
  Livraison:Livraison=new Livraison(0,"","","",0,"");
  message:any;


  constructor(private service:LivraisonService) { }

  ngOnInit(): void {
    let resp=this.service.getAllLivraisons();
    resp.subscribe((data)=>this.livraisons=data);
  }

  delete(id:number) {
    let v = this.service.deleteLivraison(id);
    v.subscribe((data)=>this.livraisons=data);
  }

  SearchLivraison(){
    if(this.nomdestinataire == ""){
      this.ngOnInit();
    }else{
      this.livraisons=this.livraisons.filter((res: { nomdestinataire: string; }) =>{
        return res.nomdestinataire.toLocaleLowerCase().match(this.nomdestinataire.toLocaleLowerCase());
      })
    }
  }

 // getLivraisonById(idLivraison: any){
  
  
    // rechercher la livraison avec l'ID spécifié
   // let l  = this.service.getLivraisonById(idLivraison);
    //l.subscribe((data)=>this.livraisons=data);
 
 // }

  updateDelivery(livraison:Livraison){
    this.Livraison = livraison;
    this.editing = true;
}

public register(){
  this.service.addLivraison(this.Livraison)
  .subscribe(()=>{
    this.editing =false;
    this.livraisons =new Livraison(0,"","","",0,"");
    this.loadLivraisons();});
}
 loadLivraisons(){
  let resp=this.service.getAllLivraisons();
    resp.subscribe((data)=>this.livraisons=data);
 }

}
