import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-glossario',
  templateUrl: 'glossario.html',
})
export class GlossarioPage {

  searchQuery: string = '';
  plantas: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializePlantas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlossarioPage');
  }

  initializePlantas(){
    this.plantas = [
      'Ypê',
      'Nim',
      'Mangueira'
    ];
  }

  getPlantas(ev:any){
    //Reseta a lista das plantas
    this.initializePlantas();

    const val = ev.target.value;

    if(val&&val.trim() != ''){
      this.plantas = this.plantas.filter((p) => {
        return (p.toLowerCase().indexOf(val.toLowerCase()) > - 1);
      })
    }
  }

}
