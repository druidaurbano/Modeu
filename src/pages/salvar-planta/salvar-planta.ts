import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-salvar-planta',
  templateUrl: 'salvar-planta.html',
})
export class SalvarPlantaPage {

  fotoPlanta: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController) {
    this.fotoPlanta = navParams.get('dataFoto');

  }
  
  salvarFoto(){
    this.toast.create({message: 'Erro ao salvar o contato!', duration: 3000, position: 'botton'}).present();  
  }
  

}
