import {Product} from "../Product/Product";
import {panier} from "./panier";

export class Lignecommande{
  idLigneCommande!:any;
  quantiteProduit!:any;
  products!:Product[];
  idCommande!:number;
  paniers!:panier[];
}
