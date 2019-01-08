import { Menu2Page } from './../menu2/menu2';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMenuPage(){
    this.navCtrl.push(Menu2Page);
  }


}
