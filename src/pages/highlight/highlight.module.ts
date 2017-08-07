import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighlightPage } from './highlight';

@NgModule({
  declarations: [
    HighlightPage,
  ],
  imports: [
    IonicPageModule.forChild(HighlightPage),
  ],
})
export class HighlightPageModule {}
