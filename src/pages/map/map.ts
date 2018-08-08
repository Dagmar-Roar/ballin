import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService} from '../../services/auth.service';
import { LoginPage} from '../login/login'
declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  place: string;

  constructor(public navCtrl: NavController,
              public nav: Nav,
              public geolocation: Geolocation,
              private auth: AuthService) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then( (position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    this.place = "antibes";
    let content = `<h4> ${ this.place } </h4>`;

    console.log(marker);
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker,content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker,'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  login() {
      this.auth.signOut();
      this.nav.setRoot(LoginPage);
  }

  logout() {
    console.log('biatch');
    //this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }
}
