import { Geolocation } from '@ionic-native/geolocation';
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
    myLatLng: any;
    map: any;

    constructor(public navCtrl: NavController, private camera: Camera, private geo : Geolocation) {
    
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

    loadMap(){
        //const rta = await this.geolocation.getCurrentPosition();
        /*const myLatLng = {
            lat: -23.5635795,
            lng: -46.656248
        };*/

        this.geo.getCurrentPosition().then((pos) => {
            this.myLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            console.log(this.myLatLng);
            const mapEle: HTMLElement = document.getElementById('map');
            this.map = new google.maps.Map(mapEle,{
              center: this.myLatLng,
              zoom: 17
            });
          }, (err) => {
              
           console.log(' Error : ' + JSON.stringify(err));
          })

        const mapEle: HTMLElement = document.getElementById('map');
        this.map = new google.maps.Map(mapEle,{
            center: this.myLatLng,
            zoom: 12
        });
        
        this.addMarker();
        
    }

    addMarker(){
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            draggable: true,
            position: this.myLatLng  
          })
      
    }

    takePhoto(){
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          
          this.camera.getPicture(options).then((imageData) => {
           // imageData is either a base64 encoded string or a file URI
           // If it's base64 (DATA_URL):
           this.myPhoto = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
           // Handle error
           console.log(' Error : ' + JSON.stringify(err));
          });
    }

}