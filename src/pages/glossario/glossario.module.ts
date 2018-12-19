import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlossarioPage } from './glossario';

@NgModule({
  declarations: [
    GlossarioPage,
  ],
  imports: [
    IonicPageModule.forChild(GlossarioPage),
  ],
})
export class GlossarioPageModule {}
