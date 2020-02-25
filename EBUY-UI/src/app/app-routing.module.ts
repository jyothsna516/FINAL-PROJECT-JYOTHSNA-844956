import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerLandingpageComponent } from './Seller/seller-landingpage/seller-landingpage.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { BuyerLandingpageComponent } from './Buyer/buyer-landingpage/buyer-landingpage.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnBlockBuyerComponent } from './Admin/block-un-block-buyer/block-un-block-buyer.component';
import { BlockUnBlockSellerComponent } from './Admin/block-un-block-seller/block-un-block-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { ViewbuyerProfileComponent } from './Buyer/viewbuyer-profile/viewbuyer-profile.component';
import { HomeComponent } from './account/home/home.component';
import { ContactComponent } from './account/contact/contact.component';



const routes: Routes = [{path:'seller',component:SellerLandingpageComponent,children:[{path:'additems',component:AddItemsComponent},
{path:'viewitems',component:ViewItemsComponent},{path:'viewreports',component:ViewReportsComponent},
{path:'viewprofile',component:ViewProfileComponent}]},{
  path:'buyer',component:BuyerLandingpageComponent,children:[{path:'search',component:SearchComponent},{path:'viewcart',component:ViewCartComponent},
{path:'purchasehistory',component:PurchaseHistoryComponent},{path:'buyproduct',component:BuyProductComponent},
{path:'viewbuyerprofile',component:ViewbuyerProfileComponent}]},{path:'admin',component:AdminLandingPageComponent,children:[{
path:'blockunblockbuyer',component:BlockUnBlockBuyerComponent},{path:'blockunblockseller',component:BlockUnBlockSellerComponent},
{path:'addcategory',component:AddCategoryComponent},
{path:'addsubcategory',component:AddSubCategoryComponent},{path:'dailyreports',component:DailyReportsComponent}]},
{path:'login',component:LoginComponent,},{path:'register-seller',component:RegisterSellerComponent},
{path:'registerbuyer',component:RegisterBuyerComponent},{path:'home',component:HomeComponent},
{path:'register-buyer',component:RegisterBuyerComponent},{path:'contactus',component:ContactComponent},{path:'',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
