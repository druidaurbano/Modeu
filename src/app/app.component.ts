import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { MapaPage } from './../pages/mapa/mapa';
import { PerfilPage } from './../pages/perfil/perfil';
import { PlantioPage } from './../pages/plantio/plantio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  pages:[{title: string, component: any}];
  rootPage = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

this.pages = [
  {title: 'Glossário', component: GlossarioPage},
  {title: 'Plantio e Manutenção', component: PlantioPage},
  {title: 'Meu Album', component: AlbumPage},
  {title: 'Editar Perfil', component: HomePage},
  {title: 'Sair', component: HomePage}
];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

openPage(page: {title: string, component: any}): void{
  this.nav.setRoot(page.component);
}

}

