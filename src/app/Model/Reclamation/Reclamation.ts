enum typerecl {
  logicielle='logicielle',
  materielle='materielle'


}
enum Statuss {
  done='done',
  inprogess='inprogess',
  notdone='notdone'

}

enum sujetrec {
  produit='produit',
  livreur='livreur',
  serivicedesite='serivicedesite'

}

export class Reclamation {
  idrec!:number ;
  typerec!:typerecl;
  description!:sujetrec;
  ticketstatus!:Statuss;

  createdDate!:Date ;
  priorite!:String ;
  reponsealareclamation!:String  ;
}
