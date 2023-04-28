import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {panier} from "../../Model/PanierR/panier";

@Injectable({
  providedIn: 'root'
})
export class ConsumerPanierService {

  constructor(private http: HttpClient) { }
  getPanier(id:number){
    return this.http.get<panier[]>("http://localhost:8188/SpringMVC/panier/get/"+id);
  }
  getCommandePanier(id:number){
    return this.http.get("http://localhost:8188/SpringMVC/Commande/get/"+id);
  }
  postPanier(){
    return this.http.get("http://localhost:8188/SpringMVC/panier/add/{{id}}");
  }
}
