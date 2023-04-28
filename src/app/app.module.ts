import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HomeForumComponent } from './Forum/home-forum/home-forum.component';
import {HomeBackComponent} from "./home-back/home-back.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import {HttpClientModule} from "@angular/common/http";
import {CommandeComponent} from "./commande/commande.component";
import { CartComponent } from './cart/cart.component';
import { FactureComponent } from './facture/facture.component';
import { CartbackComponent } from './cartback/cartback.component';
import { FacturebackComponent } from './factureback/factureback.component';
import { CommandebackComponent } from './commandeback/commandeback.component';


@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    FrontOfficeComponent,
    HomeForumComponent,
    HomeBackComponent,
    HomeFrontComponent,
    CommandeComponent,
    CartComponent,
    FactureComponent,
    CartbackComponent,
    FacturebackComponent,
    CommandebackComponent,


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
