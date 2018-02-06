import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';

import { LaporPage } from '../lapor/lapor';
import { DetilPage } from '../detil/detil';
import { LoginPage } from '../login/login';
import { ProfilPage } from '../profil/profil';

import mapboxGL from 'mapbox-gl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    private platform: Platform) {

  }

  @ViewChild('map') mapContainer: ElementRef;
  map:any;
  lat:Number = -7;
  lng:Number = 110;

  ionViewDidLoad() {
    this.loadGL();
  }

  loadGL() {
    mapboxGL.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
      var map = new mapboxGL.Map({
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [this.lng, this.lat],
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });
  }

  goToPage(page) {
    switch(page) {
      case 'lapor':
        this.navCtrl.push(LaporPage, {lat:this.lat, lng:this.lng});
        break;
      case 'profil':
        this.navCtrl.push(ProfilPage);
        break;
      case 'detil':
        this.navCtrl.push(DetilPage);
        break;
      case 'login':
        this.navCtrl.push(LoginPage);
        break;
    }
  }
}
