import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IpePage } from './ipe';

@NgModule({
  declarations: [
    IpePage,
  ],
  imports: [
    IonicPageModule.forChild(IpePage),
  ],
})
export class IpePageModule {}
