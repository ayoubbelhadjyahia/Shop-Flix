import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {panier} from "../../Model/PanierR/panier";
import {Lignecommande} from "../../Model/PanierR/lignecommande";
import {Product} from "../../Model/Product/Product";
import {Observable} from "rxjs";
import {Commande} from "../../Model/PanierR/commandepanier";

@Injectable({
  providedIn: 'root'
})
export class ConsumerPanierService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getLigneCommandePanier(id:number){
    return this.http.get<Lignecommande[]>("http://localhost:8188/SpringMVC/LigneCommande/getlistLigne/"+id);
  }
  deleteLigneCommande(id:number){
    return this.http.delete("http://localhost:8188/SpringMVC/LigneCommande/delete/"+id);
  }
  getPanier(id:number){
    return this.http.get<panier[]>("http://localhost:8188/SpringMVC/panier/get/"+id);
  }
  getPanierByUser(id:number):Observable<panier>{
    return this.http.get<panier>("http://localhost:8188/SpringMVC/panier/getbyuser/"+id);
  }

  postPanier(id:number){
    return this.http.get("http://localhost:8188/SpringMVC/panier/add/"+id);
  }
  addPanierandaffectoUser(idUser: number) {
    return this.http.put<any>("http://localhost:8188/SpringMVC/addPanierandaffectoUser/"+idUser,this.httpOptions);
  }
  public updatePanier(panier:panier){
    return this.http.put<panier>("http://localhost:8188/SpringMVC/panier/add/",panier);
  }
  public deletePanier(id:number){
    return this.http.delete<void>(`http://localhost:8188/SpringMVC/panier/add/${id}`);
  }


  //product//
  addProductToPanier(productId :number) {
    return
  }


  /////ligne commande//
  addLigneCommande(idPanier:number, productId:number,qty:number){

    //az/ay
    return this.http.post<any>("http://localhost:8188/SpringMVC/LigneCommande/add/"+idPanier+"/"+productId+"/"+qty,this.httpOptions);


  }

 //commande///
  addCommande(adresse:string, idUser:number,idLigneCommande:number){
    return this.http.get<any>("http://localhost:8188/SpringMVC/LigneCommande/add/"+idUser+"/"+idLigneCommande+"/"+adresse,this.httpOptions);

  }
  getAllCommandes(){
    return this.http.get<any>('http://localhost:8188/SpringMVC/Commande/allcommande/');
  }
  deleteCommande(id:number){
    return this.http.delete("http://localhost:8188/SpringMVC/Commande/delete/"+id);
  }
getSimilarProduct(productId:number,idCommande:number){
    return this.http.get("http://localhost:8188/SpringMVC/panier/similar/"+productId+"/"+idCommande)
}
getCommandeById(id:number){
    return this.http.get("http://localhost:8188/SpringMVC/Commande/get/"+id)
}

}
