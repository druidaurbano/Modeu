import { MeuAlbumPage } from './../meu-album/meu-album';
import { HomePage } from './../home/home';
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

  salvarFoto(): void{
    this.enviarFoto(this.fotoPlanta);
  }

  enviarFoto(fotoPlanta: any){
    this.navCtrl.pop();
    this.navCtrl.push(MeuAlbumPage,{dataFotoSalva: fotoPlanta});
    this.toast.create({message: 'Foto Salva', duration: 3000, position: 'botton'}).present();  
  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }
  

}
