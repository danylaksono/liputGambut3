import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = HomePage;
  distance:Number = 100;
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  constructor(
    public navCtrl: NavController) { 
  }
 
}