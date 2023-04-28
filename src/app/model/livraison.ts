enum Type_livraison {
    Livraisonexpress,
    Livraisonstandard,
  }

  enum Statut_livraison {
    Colisenregistre,
    Colisentransit,
    Colisarecuperer,
    Colisnonlivre,
    Colislivre,
    Retouralenvoyeur,
  }

  enum description {
    aucun,
    Livraisonrapidequiprend24h,
    Livraisonnormalequipeutprendrejusquaunesemaine,
  }


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
   

constructor (idLivraison:number,nomdestinataire:String, prenomdestinataire:String, adresse: String, numerotel:number, mail: String){};
}