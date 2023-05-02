import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../Model/Reclamation/Reclamation";
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {user} from "../Model/User/User";
import {Intervention} from "../Model/Reclamation/Intervention";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http:HttpClient) { }
  getreclamation(){
    return this.http.get<Reclamation[]>(`http://localhost:8188/SpringMVC/order`);
  }
editrec(reclamation:Reclamation){
    return this.http.put<Reclamation>(`http://localhost:8188/SpringMVC/updaterecwithrec`,reclamation);
}
  getnbrinterdechaqueuser(){
    return this.http.get<String[]>(`http://localhost:8188/SpringMVC/getnbrinterventionsdechaqueuser`);
  }
  getcommandedeuser(userid:any){
    return this.http.get<Lignecommande[]>(`http://localhost:8188/SpringMVC/listecmd/${userid}`,{responseType:'json'});
  }
  getreclamationbyid(idrec:any){
    return this.http.get<any>(`http://localhost:8188/SpringMVC/returnbyid/${idrec}`, {responseType: 'json'});
  }
  getEmployeeOfTheMonth(): Observable<any> {
    return this.http.get<user>(`http://localhost:8188/SpringMVC/lemeilleuremployebrusque`, {responseType: 'json'});
  }
  getreclamationuser(userrr_id:number): Observable<any>{
    return this.http.get<Reclamation[]>(`http://localhost:8188/SpringMVC/recuser/${userrr_id}`);

  }
  getlgcommandes(){
    return this.http.get<Lignecommande[]>(` http://localhost:8188/SpringMVC/LigneCommande/listelgcommandes`)
  }
  getnbrreclamationpourchaqueproduit(){
    return this.http.get<String[]>(`http://localhost:8188/SpringMVC/nbrderecpourchaqueproduit`, { responseType: 'json' });
  }
  getproduitsimilaires(idrec:number){
    return this.http.get<any[]>(`http://localhost:8188/SpringMVC/listeproduitsimilaires/${idrec}`, { responseType: 'json' });
  }
  getsatisfaction(){
    const  filepath='C:\\Users\\hp\\Desktop\\listedesmotspositifs.xlsx';
    const  filepathneutre='C:\\Users\\hp\\Desktop\\listedesmotsneutres.xlsx';
    const   filepathnegatifs='C:\\Users\\hp\\Desktop\\listesdemotsnegatifs.xlsx';

    return this.http.get<string>(`http://localhost:8188/SpringMVC/scoresatisfaction/{{filepath}}/{{filepathneutre}}/{{filepathnegatifs}}`, { params: { filepath, filepathneutre, filepathnegatifs } , responseType: 'json' });
  }

  prixproduit(){
    return this.http.get(`http://localhost:8188/SpringMVC/prixproduits/{{description}}/{{idprodrec}}`)
  }
  delete(idrec:number){
    return this.http.delete(`http://localhost:8188/SpringMVC/reclamationsupprimer/${idrec}`);
  }
  deleteinter (idinter:number){
    return this.http.delete(`http://localhost:8188/SpringMVC/supprimerinter/${idinter}`)
  }
  editerinter(intervention:Intervention){
    return this.http.put(` http://localhost:8188/SpringMVC/updateintervention2`,intervention);
  }
  editer(idrec:number, data: any){
    return this.http.put(`http://localhost:8188/SpringMVC/updaterecwithrec/${idrec}`,data);
  }
retournesalaire(idrec:any){
    return this.http.get<any>(`http://localhost:8188/SpringMVC/calculsalaire/${idrec}`, {responseType: 'json'})
}
getinterventions(){
    return this.http.get<Intervention[]>(` http://localhost:8188/SpringMVC/listeinterventions`);
}
addintervention(intervention:Intervention):Observable<any>{
    return this.http.post(`http://localhost:8188/SpringMVC/assignadmintointer`,intervention);

}
addreclamation(idligcmd:number,reclamation:Reclamation):Observable<any>{
    return this.http.post(`http://localhost:8188/SpringMVC/addAndAssignPostLiketoPostAndUser/${idligcmd}`, reclamation);
}
}

