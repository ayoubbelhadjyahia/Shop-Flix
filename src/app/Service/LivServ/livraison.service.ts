import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { Livreur } from 'src/app/model/Livraison/livreur';
import { Livraison } from 'src/app/model/Livraison/livraison';



@Injectable({
  providedIn: 'root'
})
export class LivraisonService {


  constructor(private http:HttpClient) { }
/////////////////////////////////////////////////////////////////////////
//GestionLivraison

addLivraison(livraison?:Livraison): Observable<Object> {
  return this.http.post<Object>('http://localhost:8188/SpringMVC/Gestionslivraison/ajouterlivraison',livraison);
  }
  
  getAllLivraisons() {
    return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/afficherdetailsdelivraison');
  }
  
  updateDelivery(livraison:Livraison){
  return this.http.put('http://localhost:8188/SpringMVC/Gestionslivraison/Modifierlalivraison/',livraison);
  }
  
  deleteLivraison(idLivraison:number){
    return this.http.delete('http://localhost:8188/SpringMVC/Gestionslivraison/Supprimerunelivraison/'+idLivraison);
  }
  getLivraisonById(idLivraison:any) {
    return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/Rechercherunelivraison/'+idLivraison);
  }

  //////////////////////////////////////////////////////////////////////////////
  //Livraisonavancée
  calculerPrixTotal(id:any): Observable<Object>  {
    return this.http.post<Object> ('http://localhost:8188/SpringMVC/Gestionslivraison/prix-total/' +id,{});
  }

  generateQRCode(idLivraison:any){
    return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/afficherdetailsdulivreur'+idLivraison);
  }  
  
////////////////////////////////////////////////////////////////////////////////////////////////

//GestionLivreur

addlivreur(livreur?:Livreur): Observable<Object>{
  return this.http.post<Object>('http://localhost:8188/SpringMVC/Gestionslivraison/ajouterlivreur',livreur);
}

retrieveAllLivreur(){
  return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/afficherdetailsdulivreur');
}

getLivreurById(idLivreur:any){
  return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/Rechercherunlivreur/'+idLivreur);
}

updateLivreur(livreur:Livreur){
  return this.http.put('http://localhost:8188/SpringMVC/Gestionslivraison/Modifierlelivreur/',livreur);
}

deleteLivreur(idLivreur:number){
  return this.http.delete('http://localhost:8188/SpringMVC/Gestionslivraison/Supprimerunlivreur/'+idLivreur);
}
////////////////////////////////////////////////////////////////////////////////////////
// LivreurAvancé

activer(x1:any,x2:any){
  return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/retounerstatut'+x1,x2);
}

ajouterunbonus(idLivreur:number){
  return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/ajouterbonusausalaire/'+idLivreur);
}

ajouterunbonusadd(idLivreur:number){
  return this.http.get('http://localhost:8188/SpringMVC/Gestionslivraison/ajouterbonusausalaireadd/'+idLivreur);
}

Meilleurlivreurdumois():Observable<any>{
  return this.http.get<Livreur>('http://localhost:8188/SpringMVC/Gestionslivraison/Meilleurlivreurdumois',{responseType: 'json'});
}



} 
