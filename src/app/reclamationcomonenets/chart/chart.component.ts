import { Component, OnInit } from '@angular/core';
import {ReclamationService} from "../../reclamationservice/reclamation.service";
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  listnumber!: any;
  listinter!:any;
  constructor(private recserv:ReclamationService) { }

  ngOnInit(): void {
    this.recserv.getnbrreclamationpourchaqueproduit().subscribe({
      next: (data: String[]) => {
        this.listnumber = data;


        let labels: string[] = [];
        let values: number[] = [];

        // Parcourir les données et ajouter les labels et les valeurs au tableau
        for (let i = 0; i < this.listnumber.length; i++) {
          const claimInfo = this.listnumber[i].split(':'); // Split the string at the ':' character

          const subParts = claimInfo[0].split("de"); // ["le nombre ", "reclamation ", "hhjjh "]
          const hhjjh = subParts[subParts.length - 1].trim();// Extract the product name from the first part of the string
          const claimNumber = parseInt(claimInfo[1], 10); // Parse the claim number from the second part of the string

          labels.push(hhjjh);
          values.push(claimNumber);
        }

        // Créer un nouveau graphique à barres avec Chart.js
        const chart = new Chart("myChart", {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Nombre de réclamations par produit',
              data: values,
              backgroundColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)' , 'green', 'purple', 'orange'],
              borderColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)', 'green', 'purple', 'orange'],
              borderWidth: 1,
              barPercentage: 0.2
            }]
          },
          options: {

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
    this.recserv.getnbrinterdechaqueuser().subscribe({
      next: (data: String[]) => {
        this.listinter = data;


        let labels1: string[] = [];
        let values1: number[] = [];

        // Parcourir les données et ajouter les labels et les valeurs au tableau
        for (let i = 0; i < this.listinter.length; i++) {
          var parts = this.listinter[i].split("est:");
          var nom = parts[0].substring(28);
          var nombre = parts[1]; // Parse the claim number from the second part of the string

          labels1.push(nom);
          values1.push(nombre);
        }

        // Créer un nouveau graphique à barres avec Chart.js
        const chart = new Chart("graphe", {
          type: 'bar',
          data: {
            labels: labels1,
            datasets: [{
              label: 'Nombre de intervention resolues par l user ',
              data: values1,
              backgroundColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)' , 'green', 'purple', 'orange'],
              borderColor: ['rgb(255,182,193)', 'rgb(191,116,217 )', 'rgb(180, 247, 194)', 'green', 'purple', 'orange'],
              borderWidth: 1,
              barPercentage: 0.2
            }]
          },
          options: {

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


