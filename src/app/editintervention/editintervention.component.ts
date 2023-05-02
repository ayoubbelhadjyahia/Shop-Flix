import {Component, Inject, OnInit} from '@angular/core';
import {Reclamation} from "../Model/Reclamation/Reclamation";
import {Intervention} from "../Model/Reclamation/Intervention";
import {ReclamationService} from "../reclamationservice/reclamation.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-editintervention',
  templateUrl: './editintervention.component.html',
  styleUrls: ['./editintervention.component.css']
})
export class EditinterventionComponent implements OnInit {
  intervention: Intervention = new Intervention();
  constructor(private recserv:ReclamationService,@Inject(MAT_DIALOG_DATA) public data:Intervention,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.intervention = this.data;
  }
  editinterrr(){
    this.recserv.editerinter(this.intervention).subscribe({next:()=>{this.ngOnInit();
          this.toastr.success('La réclamation a été modifiée avec succès', 'Succès');}
      }
    );
    console.log(this.intervention.id);
  }
}
