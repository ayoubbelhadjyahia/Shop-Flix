import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {EditrecComponent} from "../editrec/editrec.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Lignecommande} from "../../Model/PanierR/lignecommande";
enum sujetrec {
  produit='produit',
  livreur='livreur',
  serivicedesite='serivicedesite'

}
@Component({
  selector: 'app-reclamationuser',
  templateUrl: './reclamationuser.component.html',
  styleUrls: ['./reclamationuser.component.css']
})
export class ReclamationuserComponent implements OnInit {
  id: number = 1;

  page:number=1;
sujetrec1=sujetrec;
  listerec!:Reclamation[];
  //dialogRef!:MatDialogRef<EditrecComponent>;
  constructor(private recserv:ReclamationService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recserv.getreclamationuser(this.id).subscribe({
      next: (data) => this.listerec = data
    });
  }
  delete (idrec:number)
  {
    this.recserv.delete(idrec).subscribe({next:()=>this.ngOnInit()});
  };
 editrec1(reclamation:Reclamation){
   //this.recserv.editrec(reclamation).subscribe({next:()=>this.ngOnInit()});
      const dialogRef = this.dialog.open(EditrecComponent,{
     width: '100%',
     data: reclamation
   });
   }


}
