// import { Geolocation } from '@ionic-native/geolocation';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

//var permissions = cordova.plugins.permissions;
declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage implements OnInit{

    myPhoto:any;

    constructor(public navCtrl: NavController, private camera: Camera) {
    
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
            lat: -23.5635795,
            lng: -46.656248
        };
        console.log(myLatLng);
        const mapEle: HTMLElement = document.getElementById('map');
        const map = new google.maps.Map(mapEle,{
            center: myLatLng,
            zoom: 12
        });
    }

    takePhoto(){
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          
          this.camera.getPicture(options).then((imageData) => {
           // imageData is either a base64 encoded string or a file URI
           // If it's base64 (DATA_URL):
           this.myPhoto = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
           // Handle error
          });
    }

}