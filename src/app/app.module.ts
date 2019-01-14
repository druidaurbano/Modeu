import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//import {Geolocation} from '@ionic-native/geolocation';
import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MapaPage } from './../pages/mapa/mapa';
import { PlantioPage } from './../pages/plantio/plantio';

import { JacarandaPage } from './../pages/jacaranda/jacaranda';
import { NoivinhaPage } from './../pages/noivinha/noivinha';
import { IpePage } from '../pages/ipe/ipe';
import { ExtremosaPage } from '../pages/extremosa/extremosa';
import { OitiPage } from '../pages/oiti/oiti';



@NgModule({
  declarations: [
    MyApp,
    AlbumPage,
    CadastroPage,
    GlossarioPage,
    HomePage,
    LoginPage,
    MapaPage,
    PlantioPage,
    NoivinhaPage,
    IpePage,
    JacarandaPage,
    ExtremosaPage,
    OitiPage
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
    LoginPage,
    MapaPage,
    PlantioPage,
    NoivinhaPage,
    IpePage,
    JacarandaPage,
    ExtremosaPage,
    OitiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
