import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Livraison } from './model/livraison';


@Injectable({
  providedIn: 'root'
})
export class LivraisonService {


  constructor(private http:HttpClient) { }



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
} 
