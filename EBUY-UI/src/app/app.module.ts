import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BuyerComponent } from './buyer/buyer.component';
//import { SellerComponent } from './seller/seller.component';
//import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { BuyerLandingpageComponent } from './Buyer/buyer-landingpage/buyer-landingpage.component';
//import { AdItemsComponent } from './Buyer/add-items/ad-items.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
//import { ViewProfileComponent } from './Buyer/view-profile/view-profile1.component';
import { ViewbuyerProfileComponent } from './Buyer/viewbuyer-profile/viewbuyer-profile.component';

import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { SellerLandingpageComponent } from './Seller/seller-landingpage/seller-landingpage.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnBlockBuyerComponent } from './Admin/block-un-block-buyer/block-un-block-buyer.component';
import { BlockUnBlockSellerComponent } from './Admin/block-un-block-seller/block-un-block-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
// import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
// import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { HomeComponent } from './account/home/home.component';
import { ContactComponent } from './account/contact/contact.component';
import { UserService } from './Account/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { EditprofileComponent } from './Buyer/editprofile/editprofile.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { AddcartComponent } from './Buyer/addcart/addcart.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './account/registerbuyer/registerbuyer.component';


@NgModule({
  declarations: [
    AppComponent,
   // BuyerComponent,
    //SellerComponent,
   // AdminComponent,
    AccountComponent,
    BuyerLandingpageComponent,
    //AdItemsComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    SearchComponent,
    ViewbuyerProfileComponent,
    BuyProductComponent,
    SellerLandingpageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    ViewProfileComponent,
    AdminLandingPageComponent,
    BlockUnBlockBuyerComponent,
    BlockUnBlockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
   RegisterSellerComponent,
   RegisterBuyerComponent,
    HomeComponent,
    ContactComponent,
    EditprofileComponent,
    ViewcategoryComponent,
    ViewsubcategoryComponent,
    AddcartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
