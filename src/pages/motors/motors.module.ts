import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotorsPage } from './motors';

@NgModule({
  declarations: [
    MotorsPage,
  ],
  imports: [
    IonicPageModule.forChild(MotorsPage),
  ],
})
export class MotorsPageModule {}
