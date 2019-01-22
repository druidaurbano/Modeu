import { GlossarioPage } from './../glossario/glossario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})

export class DescricaoPage {

  foto: any;
  popular: string;
  cientifico: string;
  descricao: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.foto = navParams.get('datafoto');
    this.popular = navParams.get('datapopular');
    this.cientifico = navParams.get('datacientifico');
    this.descricao = navParams.get('datadescricao');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescricaoPage');
  }

}
