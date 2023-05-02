import { Livraison } from "./livraison";
import { Statut_livreur } from "./statutlivreur";


export class Livreur {
    idLivreur!:number;
    datedembauche!:Date;
    salaire!:number;
    latitude!:String;
    livraisons!:Livraison[];
    longitude!: String;
    nbrelivraison!:number;
    origin!: String ;
    destination!:String;
    statutlivreur!:Statut_livreur;
    
    

}