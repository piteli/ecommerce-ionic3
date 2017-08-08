import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportTravelPage } from './sport-travel';

@NgModule({
  declarations: [
    SportTravelPage,
  ],
  imports: [
    IonicPageModule.forChild(SportTravelPage),
  ],
})
export class SportTravelPageModule {}
