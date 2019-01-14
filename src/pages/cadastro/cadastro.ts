import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void{
    this.navCtrl.push(HomePage);
  }

  popPage(): void{
    this.navCtrl.setRoot(LoginPage);
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}