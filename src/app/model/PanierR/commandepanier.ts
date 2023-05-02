import {Lignecommande} from "./lignecommande";

export class Commande {
  idCommande!:number;
  numCommande!:any;
  dateCommande!:Date;
  adressCommande!:string;
   idLigneCommande!:number;
  ligneCommandes!:Lignecommande[];
  }
