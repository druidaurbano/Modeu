import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 

import { CadastroPage } from './../cadastro/cadastro';
import { MapaPage } from './../mapa/mapa';
import { PerfilPage } from './../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  
  constructor(public navCtrl: NavController) {    //NavController controla a navegação da aplicação
  
  }

  onCadastro() : void{
    this.navCtrl.push(CadastroPage);
  }

  onPerfil() : void{
    this.navCtrl.push(PerfilPage);
  }

  onMapa() : void{
    this.navCtrl.push(MapaPage);
  }
}
