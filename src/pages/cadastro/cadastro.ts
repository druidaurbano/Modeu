import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  registerForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public Formbuilder: FormBuilder
    ) {
      this.registerForm = this.Formbuilder.group({
        name: [null, [Validators.required, Validators.minLength(4)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(4)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(4)]]


      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
