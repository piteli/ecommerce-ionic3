import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopByBrandsPage } from './shop-by-brands';

@NgModule({
  declarations: [
    ShopByBrandsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopByBrandsPage),
  ],
})
export class ShopByBrandsPageModule {}
