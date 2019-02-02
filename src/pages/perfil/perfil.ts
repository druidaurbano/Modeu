import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  inputtext: string;
  key: string = 'username';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  saveData(){
    this.storage.set(this.key, this.inputtext);
  }

  loadData(){
    this.storage.get(this.key).then((val) =>{
      console.log('Your username is', val)
    });
  }

}
