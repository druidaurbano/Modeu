import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';

import { DescricaoPage } from './../descricao/descricao';


@IonicPage()
@Component({
  selector: 'page-glossario',
  templateUrl: 'glossario.html',
})

export class GlossarioPage {

  plantas:[{foto: any, popular: string, cientifico: string, descricao: string}];

  constructor(public navCtrl: NavController) {

    this.plantas = [
      { foto: 'assets/imgs/Alfeneiro-Ligustrum_lucidum.jpg', 
        popular: 'Alfeneiro', 
        cientifico: 'Ligustrum lucidum',
        descricao: ''},
        
      { foto: 'assets/imgs/Aroeira-Schinus_terebinthifolius.jpg', 
        popular: 'Aroeira', 
        cientifico: 'Schinus terebinthifolius',
        descricao: ''},

      { foto: 'assets/imgs/Cassia-Cassia_spectabilis.jpg', 
        popular: 'Cassia',
        cientifico: 'Cassia spectabilis',
        descricao: ''},

      { foto: 'assets/imgs/Extremosa-Lagerstroemia_indica.jpg',
        popular: 'Extremosa',
        cientifico: 'Lagerstroemia indica',
        descricao: ''},

      { foto: 'assets/imgs/Ipe_Amarelo-Handroanthus_chrysotrichus.jpg',
        popular: 'Ipê Amarelo',
        cientifico: 'Handroanthus chrysotrichus',
        descricao: ''},

      { foto: 'assets/imgs/Ipe_Roxo-Tabebuia_avellanedae.jpg',
        popular: 'Ipê Roxo',
        cientifico: 'Tabebuia avellanedae',
        descricao: ''},

      { foto: 'assets/imgs/Jacaranda_Mimoso-Jacaranda_mimosifolia.jpg',
        popular: 'Jacarandá',
        cientifico: 'Jacaranda mimosifolia',
        descricao: ''},

      { foto: 'assets/imgs/Noivinha-Euphorbia_eucocephala.jpg',
        popular: 'Noivinha',
        cientifico: 'Euphorbia eucocephala',
        descricao: ''},

      { foto: 'assets/imgs/Oiti-Licania_tomentosa.jpg',
        popular: 'Oiti',
        cientifico: 'Licania tomentosa',
        descricao: ''}
    ];

  }

  onDescricao(planta: {foto: any, popular: string, cientifico: string, descricao: string}) : void{
    this.navCtrl.push(DescricaoPage, 
      { datafoto: planta.foto,
        datapopular: planta.popular,
        datacientifico: planta.cientifico,
        datadescricao: planta.descricao
      });
  }

}
