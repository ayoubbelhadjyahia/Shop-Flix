import {Component, Inject, OnInit} from '@angular/core';
import {Reclamation} from "../../Model/Reclamation/Reclamation";
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-editrec',
  templateUrl: './editrec.component.html',
  styleUrls: ['./editrec.component.css']
})
export class EditrecComponent implements OnInit {
listerec!:Reclamation[];

  reclamation: Reclamation = new Reclamation();
  constructor(@Inject(MAT_DIALOG_DATA) public data:Reclamation ,private recserv:ReclamationService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reclamation = this.data;
  }
  editrec(){
    this.recserv.editrec(this.reclamation).subscribe({next:()=>{this.ngOnInit();
          this.toastr.success('La réclamation a été modifiée avec succès', 'Succès');}
      }
    );
  console.log(this.reclamation.idrec);
}
}
