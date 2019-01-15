import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
//import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Component} from '@angular/core';
import {NavController} from 'ionic-angular'; 
//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {

  constructor (public navCtrl: NavController){

  }



 /* submitForm(){
    this.afAuth.auth.createUserWithEmailAndPassword(
      this.registerForm.value.email, this.registerForm.value.password)
      .then((response) => {
        console.log('Criou usuário');
      })
      .catch((error) => {
        console.log('Deu erro', error);
      })
  }
*/
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