import {market} from "./market";
import {PackTypeEnum} from "./PackType.enum";

export class contract {
  idContract!: any;
  price!: any;
  nbrMonths!: any;
  discount!: any;
  packType!:PackTypeEnum;
  paid!: any;
  dateDebutContract!: any;
  dateFinContract !: any;
  market !:market;
}
