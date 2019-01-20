import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})

export class CadastroPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formbuilder: FormBuilder,
//    public afAuth: AngularFireAuth
  ) {
    this.registerForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required, Validators.minLength(11)]],
      telefone: [null, [Validators.required, Validators.minLength(9)]],
      endereco: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      confirmarsenha: [null, [Validators.required, Validators.minLength(8)]]
    })
  }


/*
  submitForm (){
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