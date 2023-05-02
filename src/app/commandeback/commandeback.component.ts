import { Component, OnInit } from '@angular/core';
import {ConsumerPanierService} from "../Service/PanierSer/consumer-panier.service";
import {Commande} from "../Model/PanierR/commandepanier";
import {Lignecommande} from "../Model/PanierR/lignecommande";
import {formatDate} from "@angular/common";
import {user} from "../Model/User/User";
import {CommandeDetailComponent} from "../commande-detail/commande-detail.component";
// @ts-ignore
import {pdfMake} from "pdfmake/build/pdfmake";
// @ts-ignore
import {pdfFonts} from "/pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-commandeback',
  templateUrl: './commandeback.component.html',
  styleUrls: ['./commandeback.component.css']
})
export class CommandebackComponent implements OnInit {
  pages:number=1;
Commande!:Commande[];
c :Commande=new Commande();
  constructor(private consumerPanierServ:ConsumerPanierService) { }

  generatePDF() {
    let docDefinition = {
      header: 'C#Corner PDF Header',
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'
    };

    pdfMake.createPdf(docDefinition).open();
  }

  ngOnInit(): void {
    this.consumerPanierServ.getAllCommandes().subscribe({
      next: (data) => {
        return this.Commande = data,
        console.log(data)},
    });
  }
  deleteCommande(idLigneCommande:number){
    this.consumerPanierServ.deleteCommande(idLigneCommande).subscribe({next:()=>this.ngOnInit()});
  }

  protected readonly formatDate = formatDate;
  protected readonly CommandeDetailComponent = CommandeDetailComponent;
}
