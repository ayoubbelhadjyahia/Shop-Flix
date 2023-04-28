enum Statut_livreur {
    Disponible,
    Enlivraison,
    Nondisponible,
  }

export class Livreur {
    idLivreur!:number;
    datedembauche!:Date;
    salaire!:number;
    latitude!:String;
    longitude!: String;
    Nbrelivraison!:number;
    origin!: String ;
    destination!:String;
    statut_livreur!:Statut_livreur;
   
}