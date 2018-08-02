import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(48.853898, 2.360173);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
