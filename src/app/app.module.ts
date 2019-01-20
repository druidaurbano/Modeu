import { PerfilPage } from './../pages/perfil/perfil';
import { SobrePage } from './../pages/sobre/sobre';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
//import {Geolocation} from '@ionic-native/geolocation';

//imports do firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';


//pages do aplicativo
import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MapaPage } from './../pages/mapa/mapa';
import { PlantioPage } from './../pages/plantio/plantio';


//lista das páginas de Plantas em ordem alfabética
import { AlfeneiroPage } from './../pages/alfeneiro/alfeneiro';
import { AroeiraPage } from './../pages/aroeira/aroeira';
import { CassiaPage } from './../pages/cassia/cassia';
import { ExtremosaPage } from '../pages/extremosa/extremosa';
import { IpePage } from '../pages/ipe/ipe';
import { IperoxoPage } from './../pages/iperoxo/iperoxo';
import { JacarandaPage } from './../pages/jacaranda/jacaranda';
import { NoivinhaPage } from './../pages/noivinha/noivinha';
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
    AlfeneiroPage,
    AroeiraPage,
    CassiaPage,
    ExtremosaPage,
    IpePage,
    IperoxoPage,
    JacarandaPage,
    NoivinhaPage,
    OitiPage,
    SobrePage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
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
    AlfeneiroPage,
    AroeiraPage,
    CassiaPage,
    ExtremosaPage,
    IpePage,
    IperoxoPage,
    JacarandaPage,
    NoivinhaPage,
    OitiPage,
    SobrePage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    // Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
