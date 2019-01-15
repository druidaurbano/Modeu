// import { Geolocation } from '@ionic-native/geolocation';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//var permissions = cordova.plugins.permissions;
declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage implements OnInit{

    constructor(public navCtrl: NavController) {
    
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

}