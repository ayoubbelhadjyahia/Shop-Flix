import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { HomeForumComponent } from './Forum/home-forum/home-forum.component';

import { HomeBackComponent} from "./home-back/home-back.component";
import { HomeFrontComponent} from "./home-front/home-front.component";
import { LivraisonComponent } from './livraison/livraison.component';
import { LivraisonService } from './livraison.service';
import { AllLivraisonComponent } from './all-livraison/all-livraison.component';
import { MeilleuremployeComponent } from './back-office/meilleuremploye/meilleuremploye.component';
import { AllproductComponent } from './Product/allproduct/allproduct.component';
import { DetailproductComponent } from './Product/detailproduct/detailproduct.component';
import { BackproductComponent } from './Product/backproduct/backproduct.component';
import { AddproductComponent } from './Product/addproduct/addproduct.component';
import { AdmindetailComponent } from './Product/admindetail/admindetail.component';
import { ChatComponent } from './Forum/chat/chat.component';
import { FormsModule} from "@angular/forms";
import { LoginComponent } from './User/login/login.component';
import { RetrieveUsersBackComponent } from './User/retrieve-users-back/retrieve-users-back.component';
import { ModifyUsersBackComponent } from './User/modify-users-back/modify-users-back.component';
import {CommandeComponent} from "./commande/commande.component";
import {FactureComponent} from "./facture/facture.component";
import {CartbackComponent} from "./cartback/cartback.component";
import {FacturebackComponent} from "./factureback/factureback.component";
import {CommandebackComponent} from "./commandeback/commandeback.component";
import {CartComponent} from "./cart/cart.component";


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
    LivraisonComponent,
    AllLivraisonComponent,
    MeilleuremployeComponent,
    AllproductComponent,
    DetailproductComponent,
    BackproductComponent,
    AddproductComponent,
    AdmindetailComponent,
    ChatComponent,
    LoginComponent,
    RetrieveUsersBackComponent,
    ModifyUsersBackComponent,


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
