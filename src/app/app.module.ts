import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HomeForumComponent } from './Forum/home-forum/home-forum.component';
import {HomeBackComponent} from "./home-back/home-back.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import { AllproductComponent } from './Product/allproduct/allproduct.component';
import { DetailproductComponent } from './Product/detailproduct/detailproduct.component';
import { HttpClientModule} from "@angular/common/http";
import { BackproductComponent } from './Product/backproduct/backproduct.component';
import { AddproductComponent } from './Product/addproduct/addproduct.component';
import { AdmindetailComponent } from './Product/admindetail/admindetail.component';




@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    FrontOfficeComponent,
    HomeForumComponent,
    HomeBackComponent,
    HomeFrontComponent,
    AllproductComponent,
    DetailproductComponent,
    BackproductComponent,
    AddproductComponent,
    AdmindetailComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
