enum action {
  diminutiondesalairede10,diminutiondesalairede20,diminutiondenote,sendmail,desactiveruser
}

export class Intervention {
  id!:number;
  dureeinter!: number;
  description!:  action;
  datedebinter!:Date;
}
