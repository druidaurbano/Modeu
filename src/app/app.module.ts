import { PerfilPage } from './../pages/perfil/perfil';
import { SobrePage } from './../pages/sobre/sobre';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Geolocation, GeolocationOriginal } from '@ionic-native/geolocation';

//imports do firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

//imports camera
import { Camera, CameraOptions } from '@ionic-native/camera';

//imports storage
import { IonicStorageModule } from '@ionic/storage';
import { ContactProvider } from '../providers/contact/contact';
import { DatePipe } from '@angular/common';

//imports para salvar foto
/*import { File } from '@ionic-native/file';
import { FileTransfer , FileTransferObject} from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';*/
import { IonicImageViewerModule } from 'ionic-img-viewer';

//pages do aplicativo
import { AlbumPage } from './../pages/album/album';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { DescricaoPage } from './../pages/descricao/descricao';
import { GlossarioPage } from './../pages/glossario/glossario';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MapaPage } from './../pages/mapa/mapa';
import { MeuAlbumPage } from './../pages/meu-album/meu-album';
import { PlantioPage } from './../pages/plantio/plantio';

import { EditContactPage } from './../pages/edit-contact/edit-contact';
import { SalvarPlantaPage } from '../pages/salvar-planta/salvar-planta';

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
    MeuAlbumPage,
    PlantioPage,
    PerfilPage,
    SalvarPlantaPage,
    SobrePage,
    EditContactPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
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
    MeuAlbumPage,
    PlantioPage,
    PerfilPage,
    SalvarPlantaPage,
    SobrePage,
    EditContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Camera,
    //Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    ContactProvider
  ]
})
export class AppModule {}
