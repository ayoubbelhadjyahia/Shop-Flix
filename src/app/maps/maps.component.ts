import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {

  map!: L.Map;
  coords: any| undefined;
  
   abc ={
    lat: 33.886917,
    lng: 9.537499,
  };


  
  
   
    
  
  constructor(){}
  ngAfterViewInit(): void {
    this.loadMap();
    
    
  }
  
  
  
  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }
  
  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "sk.eyJ1IjoibmF3cmVzYXNrcmkiLCJhIjoiY2xoMGZhMXRwMHRmaDNkcnowNHhyamNiayJ9.9oMH3RoyzJMvr6cvrtW8xg"
    }).addTo(this.map);
  
    this.getCurrentPosition()
    .subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);
  
    
       const icon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize:  [41, 41]
      });

  
  
      const abc ={
        lat: 33.886917,
        lng: 9.537499,
      };

      const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Votre position actuelle');
      marker.addTo(this.map);

      const marker1 = L.marker([abc.lat, abc.lng], { icon }).bindPopup('Votre position actuelle');
      marker1.addTo(this.map);
    });
  }

}
