import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HighlightPage} from '../home/child/highlight/highlight';
import {TaobaoCollectionPage} from '../home/child/taobao-collection/taobao-collection';
import {ElectronicPage} from '../home/child/electronic/electronic';
import {FashionPage} from '../home/child/fashion/fashion';
import {HomeLivingPage} from '../home/child/home-living/home-living';
import {PetShopPage} from '../home/child/pet-shop/pet-shop';
import {HealthBeautyPage} from '../home/child/health-beauty/health-beauty';
import {BabyToysPage} from '../home/child/baby-toys/baby-toys';
import {SportTravelPage} from '../home/child/sport-travel/sport-travel';
import {MotorsPage} from '../home/child/motors/motors';
import {ShopByBrandsPage} from '../home/child/shop-by-brands/shop-by-brands';
import {SuperTabsController} from 'ionic2-super-tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	page1: any = HighlightPage;
  	page2: any = TaobaoCollectionPage;
  	page3: any = ElectronicPage;
  	page4: any = FashionPage;
  	page5: any = HomeLivingPage;
  	page6: any = PetShopPage;
  	page7: any = HealthBeautyPage;
  	page8: any = BabyToysPage;
  	page9: any = SportTravelPage;
  	page10: any = MotorsPage;
  	page11: any = ShopByBrandsPage;


  constructor(public navCtrl: NavController,private superTabsCtrl: SuperTabsController) {

  }




}
