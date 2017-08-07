import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetShopPage } from './pet-shop';

@NgModule({
  declarations: [
    PetShopPage,
  ],
  imports: [
    IonicPageModule.forChild(PetShopPage),
  ],
})
export class PetShopPageModule {}
