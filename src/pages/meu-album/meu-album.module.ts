import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeuAlbumPage } from './meu-album';

@NgModule({
  declarations: [
    MeuAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(MeuAlbumPage),
  ],
})
export class MeuAlbumPageModule {}
