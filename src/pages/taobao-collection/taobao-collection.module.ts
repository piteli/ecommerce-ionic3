import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaobaoCollectionPage } from './taobao-collection';

@NgModule({
  declarations: [
    TaobaoCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(TaobaoCollectionPage),
  ],
})
export class TaobaoCollectionPageModule {}
