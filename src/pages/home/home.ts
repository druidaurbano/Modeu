import { SalvarPlantaPage } from './../salvar-planta/salvar-planta';
// import { Geolocation } from '@ionic-native/geolocation';
import { Component, OnInit } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

//import { IonicStorageModule } from '@ionic/storage';

//import para acessar arquivos
/*import { File } from '@ionic-native/file';
import { FileTransfer , FileTransferObject} from '@ionic-native/file-transfer';
import { FilePath, FilePathOriginal } from '@ionic-native/file-path';*/

//var permissions = cordova.plugins.permissions;
declare var google;

//declare var cordova: any;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage implements OnInit{

    minhaFoto:any;

    /*image: string;
    cameraImage: string;
    lastImage: string = null;
    loading: Loading;
    public base64Image: string;*/

    constructor(public navCtrl: NavController,
        private camera: Camera
        /*private transfer: Transfer,
        private file: File
        private filePath: FilePath*/) {
    
    }

   /* this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coord.latitude
        // resp.coord.longitude
    }).catch((error) => {
        console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
        //data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude 
    });*/

    ngOnInit(){
        this.loadMap();
    }

    async loadMap(){
        //const rta = await this.geolocation.getCurrentPosition();
        const myLatLng = {
            lat: -2.4187609,
            lng: -54.7410495
        };
        console.log(myLatLng);
        const mapEle: HTMLElement = document.getElementById('map');
        const map = new google.maps.Map(mapEle,{
            center: myLatLng,
            zoom: 15
        });
    }

    takePhoto(){
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
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
        this.navCtrl.push(SalvarPlantaPage,{dataFoto: minhaFoto});
      }

}