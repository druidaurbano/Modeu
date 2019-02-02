import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalvarPlantaPage } from './salvar-planta';

@NgModule({
  declarations: [
    SalvarPlantaPage,
  ],
  imports: [
    IonicPageModule.forChild(SalvarPlantaPage),
  ],
})
export class SalvarPlantaPageModule {}
