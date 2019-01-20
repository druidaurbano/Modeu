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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
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
      zoom: 17
  });
}

}
