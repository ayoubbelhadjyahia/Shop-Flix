import { description } from "./description";
import { Statut_livraison } from "./statutlivraison";
import { Type_livraison } from "./typelivraison";




export class Livraison {
    idLivraison!:number;
    dateLivraison!:Date;
    nomdestinataire!:String;
    prenomdestinataire!:String;
    adresse!: String;
    numerotel!:number;
    mail!: String ;
    description!:description;
    type_livraison!:Type_livraison;
    statut_livraison!:Statut_livraison;
   


}