import {market} from "./market";
import {role} from "./role";

export class user{
  id !: any;
  firstName !: any;
  lastName !: any;
  username !: any;
  email !: any;
  nbrpoints !: any;
  pointsFidelite !: any;
  cinUser !: any;
  phoneNumber !: any;
  status !: boolean;
  photo !: any;
  code !: any;
  createdAt !: any;
  ban !: any;
  banTime !: any;
  market !: market;
  roles!:role[];

}
