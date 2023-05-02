import {user} from "../User/User";

export class panier {
    idPanier!:number;
    datePanier!:Date;
    bonus!:any;
    prix_total!:any;
    remise!:any;
    date_expiration_panier!:Date;
    id_user!:number;
  idLigneCommande!:number;
  user!:user[];
  }
