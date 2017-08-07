import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthBeautyPage } from './health-beauty';

@NgModule({
  declarations: [
    HealthBeautyPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthBeautyPage),
  ],
})
export class HealthBeautyPageModule {}
