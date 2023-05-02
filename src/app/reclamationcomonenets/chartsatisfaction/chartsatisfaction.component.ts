import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);



@Component({
  selector: 'app-chartsatisfaction',
  templateUrl: './chartsatisfaction.component.html',
  styleUrls: ['./chartsatisfaction.component.css']
})
export class ChartsatisfactionComponent implements OnInit {
listsatisf!:any;

  constructor(private recserv:ReclamationService) { }


  ngOnInit(): void {
    this.recserv.getsatisfaction().subscribe({
      next: (data: any) => {
        this.listsatisf = data;



        let username!:string;
let moyenne!:number;
let parts!:any;
        let labels: string[] = [];
        let values: number[] = [];

        for (let i = 0; i < this.listsatisf.length; i++) {
          if (this.listsatisf[i].includes("n est pas satisfait du tout du site et ses services")) {
              parts = this.listsatisf[i].split(" ");
              username = parts[2];
              moyenne = parts[parts.length - 1];

          } else if (this.listsatisf[i].includes("est moyennement satisfait ")) {
            let  parts = this.listsatisf[i].split(" ");
             username = parts[2];
             moyenne = parts[parts.length - 1];

          } else if (this.listsatisf[i].includes("est moyennement satisfait ")) {
            let  parts = this.listsatisf[i].split(" ");
             username = parts[2];
             moyenne = parts[parts.length - 1];

          }

          console.log('Username:', username);
          console.log('Moyenne:', moyenne);
          console.log('Labels:', labels);
          console.log('Values:', values);
          console.log('parts:', parts);
          console.log('list:', this.listsatisf);

          labels.push(username);
          values.push(moyenne);
        }


        // Créer un nouveau graphique à barres avec Chart.js
        const chart = new Chart("myChart", {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'le score de satisfaction de chaque utilisateur a partir de ces commentaires ' ,
              data: values,
              backgroundColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)' , 'green', 'purple', 'orange'],
              borderColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)', 'green', 'purple', 'orange'],
              borderWidth: 1,
              barPercentage: 0.2
            }]
          },
          options: {
           // définit la hauteur du canvas
            responsive: true,

            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  font: {
                    size: 10
                  }
                }
              },
              x: {

                ticks: {
                  font: {
                    size: 10
                  }
                }
              }
            }
          }
        });

      }
    });
  }
  }
