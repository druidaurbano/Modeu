import { HomePage } from './../home/home';
import { OitiPage } from './../oiti/oiti';
import { ExtremosaPage } from './../extremosa/extremosa';
import { JacarandaPage } from './../jacaranda/jacaranda';
import { IpePage } from './../ipe/ipe';
import { NoivinhaPage } from './../noivinha/noivinha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-glossario',
  templateUrl: 'glossario.html',
})

export class GlossarioPage {

  constructor(public navCtrl: NavController) {
  }

  onOiti() : void{
    this.navCtrl.push(OitiPage);
  }

  onIpe() : void{
    this.navCtrl.push(IpePage);
  }

}
