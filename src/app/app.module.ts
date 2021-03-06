import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HighlightPage } from '../pages/home/child/highlight/highlight';
import { TaobaoCollectionPage } from '../pages/home/child/taobao-collection/taobao-collection';
import { ElectronicPage } from '../pages/home/child/electronic/electronic';
import {FashionPage} from '../pages/home/child/fashion/fashion';
import {HomeLivingPage} from '../pages/home/child/home-living/home-living';
import {PetShopPage} from '../pages/home/child/pet-shop/pet-shop';
import {HealthBeautyPage} from '../pages/home/child/health-beauty/health-beauty';
import {BabyToysPage} from '../pages/home/child/baby-toys/baby-toys';
import {SportTravelPage} from '../pages/home/child/sport-travel/sport-travel';
import {MotorsPage} from '../pages/home/child/motors/motors';
import {ShopByBrandsPage} from '../pages/home/child/shop-by-brands/shop-by-brands';
import { TabsPage } from '../pages/navigator/tabs/tabs';
import { MenuPage } from '../pages/navigator/menu/menu';
import { PopoverPage } from '../pages/components/popover/popover';
import { AuthService } from '../providers/auth-service/auth-service';
import { AuthIndexPage } from '../pages/authentication/auth-index/auth-index';
import { LoginPage } from '../pages/authentication/login/login';
import { RegisterPage } from '../pages/authentication/register/register';
import { NotificationsPage } from '../pages/notifications/notifications';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { OrdersPage } from '../pages/orders/orders';
import { SettingsPage } from '../pages/settings/settings';
import { PolicyIndexPage } from '../pages/policies/policy-index/policy-index';
import { PrivacyPolicyPage } from '../pages/policies/privacy-policy/privacy-policy';
import { TermsConditionsPage } from '../pages/policies/terms-conditions/terms-conditions';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HighlightPage,
    TaobaoCollectionPage,
    ElectronicPage,
    FashionPage,
    HomeLivingPage,
    PetShopPage,
    HealthBeautyPage,
    BabyToysPage,
    SportTravelPage,
    MotorsPage,
    ShopByBrandsPage,
    TabsPage,
    MenuPage,
    PopoverPage,
    AuthIndexPage,
    LoginPage,
    RegisterPage,
    NotificationsPage,
    WishlistPage,
    OrdersPage,
    SettingsPage,
    PolicyIndexPage,
    PrivacyPolicyPage,
    TermsConditionsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    HttpModule,
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
    PetShopPage,
    HealthBeautyPage,
    BabyToysPage,
    SportTravelPage,
    MotorsPage,
    ShopByBrandsPage,
    TabsPage,
    MenuPage,
    PopoverPage,
    AuthIndexPage,
    LoginPage,
    RegisterPage,
    NotificationsPage,
    WishlistPage,
    OrdersPage,
    SettingsPage,
    PolicyIndexPage,
    PrivacyPolicyPage,
    TermsConditionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
