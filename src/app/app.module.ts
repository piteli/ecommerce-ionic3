import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HighlightPage } from '../pages/highlight/highlight';
import { TaobaoCollectionPage } from '../pages/taobao-collection/taobao-collection';
import { ElectronicPage } from '../pages/electronic/electronic';
import {FashionPage} from '../pages/fashion/fashion';
import {HomeLivingPage} from '../pages/home-living/home-living';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HighlightPage,
    TaobaoCollectionPage,
    ElectronicPage,
    FashionPage,
    HomeLivingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HighlightPage,
    TaobaoCollectionPage,
    ElectronicPage,
    FashionPage,
    HomeLivingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
