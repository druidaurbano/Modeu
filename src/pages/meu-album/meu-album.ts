import { SalvarPlantaPage } from './../salvar-planta/salvar-planta';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-meu-album',
  templateUrl: 'meu-album.html',
})
export class MeuAlbumPage {

  minhaFoto: any;
  minhaFotoSalva: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
      this.minhaFotoSalva = navParams.get('dataFotoSalva');
  }

  tirarFoto(){
    const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: true
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       this.minhaFoto = 'data:image/jpeg;base64,' + imageData;

       this.onSalvarPlanta(this.minhaFoto);
      }, (err) => {
       // Handle error
      });
      
  }

  onSalvarPlanta(minhaFoto: any): void{
    this.navCtrl.pop();
    this.navCtrl.push(SalvarPlantaPage,{dataFoto: minhaFoto});
  }

  /*tirarFoto(){
    this.navCtrl.push(SalvarPlantaPage);
  }*/

}
