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
import { MeilleuremployeComponent } from './reclamationcomonenets/meilleuremploye/meilleuremploye.component';
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
import { ChartComponent } from './reclamationcomonenets/chart/chart.component';
import { ChartsatisfactionComponent } from './reclamationcomonenets/chartsatisfaction/chartsatisfaction.component';
import { ReclamationuserComponent } from './reclamationcomonenets/reclamationuser/reclamationuser.component';
import {NgxPaginationModule} from "ngx-pagination";
import { DetailsreclamationComponent } from './reclamationcomonenets/detailsreclamation/detailsreclamation.component';
import {RouterModule} from "@angular/router";
import {ReclamationService} from "./reclamationservice/reclamation.service";
import { ProduitsimilairesComponent } from './reclamationcomonenets/produitsimilaires/produitsimilaires.component';
import { RetournesalaireComponent } from './reclamationcomonenets/retournesalaire/retournesalaire.component';
import { GetrecComponent } from './reclamationcomonenets/getrec/getrec.component';
import { EditrecComponent } from './reclamationcomonenets/editrec/editrec.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { ListeinterventionComponent } from './listeintervention/listeintervention.component';
import { AddinterventionComponent } from './addintervention/addintervention.component';
import { EditinterventionComponent } from './editintervention/editintervention.component';
import { LgcommandesComponent } from './lgcommandes/lgcommandes.component';
import { DetailsinterComponent } from './Detalslg/detailsinter.component';
import { DetailslgComponent } from './detailslg/detailslg.component';


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
    ChartComponent,
    ChartsatisfactionComponent,
    ReclamationuserComponent,
    DetailsreclamationComponent,
    ProduitsimilairesComponent,
    RetournesalaireComponent,
    GetrecComponent,
    EditrecComponent,
    ListeinterventionComponent,
    AddinterventionComponent,
    EditinterventionComponent,
    LgcommandesComponent,
    DetailsinterComponent,
    DetailslgComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
      MatDialogModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      RouterModule


    ],
  providers: [LivraisonService, ReclamationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
