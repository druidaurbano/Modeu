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

//imports camera
import { Camera, CameraOptions } from '@ionic-native/camera';

//pages do aplicativo
import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { DescricaoPage } from './../pages/descricao/descricao';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MapaPage } from './../pages/mapa/mapa';
import { PlantioPage } from './../pages/plantio/plantio';

@NgModule({
  declarations: [
    MyApp,
    AlbumPage,
    CadastroPage,
    DescricaoPage,
    GlossarioPage,
    HomePage,
    LoginPage,
    MapaPage,
    PlantioPage,
    PerfilPage,
    SobrePage
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
    DescricaoPage,
    GlossarioPage,
    HomePage,
    LoginPage,
    MapaPage,
    PlantioPage,
    PerfilPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Camera,
    // Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
