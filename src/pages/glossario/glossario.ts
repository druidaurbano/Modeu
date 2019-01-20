import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlfeneiroPage } from './../alfeneiro/alfeneiro';
import { AroeiraPage } from './../aroeira/aroeira';
import { CassiaPage } from './../cassia/cassia';
import { ExtremosaPage } from './../extremosa/extremosa';
import { IpePage } from './../ipe/ipe';
import { IperoxoPage } from './../iperoxo/iperoxo';
import { JacarandaPage } from './../jacaranda/jacaranda';
import { NoivinhaPage } from './../noivinha/noivinha';
import { OitiPage } from './../oiti/oiti';


@IonicPage()
@Component({
  selector: 'page-glossario',
  templateUrl: 'glossario.html',
})

export class GlossarioPage {

  constructor(public navCtrl: NavController) {
  }

  onAlfeneiro() : void{
    this.navCtrl.push(AlfeneiroPage);
  }
  
  onAroeira() : void{
    this.navCtrl.push(AroeiraPage);
  }

  onCassia() : void{
    this.navCtrl.push(CassiaPage);
  }

  onExtremosa() : void{
    this.navCtrl.push(ExtremosaPage);
  }

  onIpe() : void{
    this.navCtrl.push(IpePage);
  }

  onIpeRoxo() : void{
    this.navCtrl.push(IperoxoPage);
  }

  onJacaranda() : void{
    this.navCtrl.push(JacarandaPage);
  }

  onNoivinha() : void{
    this.navCtrl.push(NoivinhaPage);
  }

  onOiti() : void{
    this.navCtrl.push(OitiPage);
  }

}
