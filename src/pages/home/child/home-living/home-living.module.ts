import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLivingPage } from './home-living';

@NgModule({
  declarations: [
    HomeLivingPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLivingPage),
  ],
})
export class HomeLivingPageModule {}
