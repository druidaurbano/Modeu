import { MapaPage } from './../mapa/mapa';
import { CadastroPage } from './../cadastro/cadastro';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }

  goToMapaPage(){
    this.navCtrl.push(MapaPage);
  }
}
