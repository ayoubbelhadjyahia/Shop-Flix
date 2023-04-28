import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HomeForumComponent } from './Forum/home-forum/home-forum.component';
import {HomeBackComponent} from "./home-back/home-back.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivraisonService } from './livraison.service';
import { AllLivraisonComponent } from './all-livraison/all-livraison.component';


@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    FrontOfficeComponent,
    HomeForumComponent,
    HomeBackComponent,
    HomeFrontComponent,
    LivraisonComponent,
    AllLivraisonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [LivraisonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
