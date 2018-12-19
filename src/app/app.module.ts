import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { MapaPage } from './../pages/mapa/mapa';
import { PerfilPage } from '../pages/perfil/perfil';
import { PlantioPage } from './../pages/plantio/plantio';



@NgModule({
  declarations: [
    MyApp,
    AlbumPage,
    CadastroPage,
    GlossarioPage,
    HomePage,
    MapaPage,
    PerfilPage,
    PlantioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlbumPage,
    CadastroPage,
    GlossarioPage,
    HomePage,
    MapaPage,
    PerfilPage,
    PlantioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
