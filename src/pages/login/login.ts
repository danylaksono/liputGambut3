import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DaftarPage } from '../daftar/daftar';
import { ProfilPage } from '../profil/profil';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  close() {
    this.navCtrl.pop();
  }

  goToPage(page) {
    switch(page) {
      case 'daftar': 
        this.navCtrl.push(DaftarPage);
      case 'profil':
        this.navCtrl.push(ProfilPage);
    }
  }
}
