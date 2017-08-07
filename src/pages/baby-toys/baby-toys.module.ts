import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyToysPage } from './baby-toys';

@NgModule({
  declarations: [
    BabyToysPage,
  ],
  imports: [
    IonicPageModule.forChild(BabyToysPage),
  ],
})
export class BabyToysPageModule {}
