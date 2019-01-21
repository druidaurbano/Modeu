import { Geolocation } from '@ionic-native/geolocation';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//var permissions = cordova.plugins.permissions;
declare var google;

@IonicPage()

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage implements OnInit{ 
  location: any;
  myLatLng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo : Geolocation) {
  }

  ngOnInit(){
    this.loadMap();
}



async loadMap(){
  //const rta = await this.geolocation.getCurrentPosition();
  /*const myLatLng = {
      lat: -2.4187609,
      lng: -54.7410495
  };*/

  this.geo.getCurrentPosition().then((pos) => {
    this.myLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    console.log(this.myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle,{
      center: this.myLatLng,
      zoom: 17
    });
  })
}

}
