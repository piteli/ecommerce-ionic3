import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FashionPage } from './fashion';

@NgModule({
  declarations: [
    FashionPage,
  ],
  imports: [
    IonicPageModule.forChild(FashionPage),
  ],
})
export class FashionPageModule {}
