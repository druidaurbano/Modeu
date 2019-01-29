import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-salvar-planta',
  templateUrl: 'salvar-planta.html',
})
export class SalvarPlantaPage {

  fotoPlanta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fotoPlanta = navParams.get('dataFoto');

  }

  

}
