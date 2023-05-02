import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackOfficeComponent} from "./back-office/back-office.component";
import {HomeForumComponent} from "./Forum/home-forum/home-forum.component";
import {FrontOfficeComponent} from "./front-office/front-office.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import {HomeBackComponent} from "./home-back/home-back.component";
import { LivraisonComponent } from './livraison/livraison.component';
import { AllLivraisonComponent } from './all-livraison/all-livraison.component';
import {AllproductComponent} from "./Product/allproduct/allproduct.component";
import {DetailproductComponent} from "./Product/detailproduct/detailproduct.component";
import {BackproductComponent} from "./Product/backproduct/backproduct.component";
import {AddproductComponent} from "./Product/addproduct/addproduct.component";
import {AdmindetailComponent} from "./Product/admindetail/admindetail.component";
import {ChatComponent} from "./Forum/chat/chat.component";
import {RetrieveUsersBackComponent} from "./User/retrieve-users-back/retrieve-users-back.component";
import {ModifyUsersBackComponent} from "./User/modify-users-back/modify-users-back.component";
import {LoginComponent} from "./User/login/login.component";
import {CommandebackComponent} from "./commandeback/commandeback.component";
import {FacturebackComponent} from "./factureback/factureback.component";
import {CartbackComponent} from "./cartback/cartback.component";
import {CommandeComponent} from "./commande/commande.component";
import {FactureComponent} from "./facture/facture.component";
import {CartComponent} from "./cart/cart.component";

import {RetrieveMarketsBackComponent} from "./User/retrieve-markets-back/retrieve-markets-back.component";
import {RetrieveContractsBackComponent} from "./User/retrieve-contracts-back/retrieve-contracts-back.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {RegisterComponent} from "./User/register/register.component";
import {VerificationComponent} from "./User/verification/verification.component";
import {NewPasswordComponent} from "./User/new-password/new-password.component";

import {LigneCommandeComponent} from "./ligne-commande/ligne-commande.component";
import {CommandeDetailComponent} from "./commande-detail/commande-detail.component";




const routes: Routes = [
  {path:'Acceuil',component:AccueilComponent},
  {path:'newpassword',component:NewPasswordComponent},

  {path:'verification',component:VerificationComponent},

  {path:'Error',component:NotFoundComponent},
  {path:'Login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'admin',component:BackOfficeComponent,
    children: [
      {path: '', component:HomeBackComponent},
      {path:'Commandeback',component:CommandebackComponent},
      {path:'Factureback',component:FacturebackComponent},
      {path:'Cartback',component:CartbackComponent},
      {path: 'addDelivery', component:LivraisonComponent},
      {path:'getAllDeliveries',component:AllLivraisonComponent},
      {path: 'adminProduct', component:BackproductComponent},
      {path: 'addProductBack', component:AddproductComponent},
      {path: 'detailp/:id', component:AdmindetailComponent},
      {path: 'retrieveusersback', component:RetrieveUsersBackComponent},
      {path: 'modifyusersback/:id', component:ModifyUsersBackComponent},
      {path: 'retrievemarketsback', component:RetrieveMarketsBackComponent},
      {path: 'retrievecontractsback', component:RetrieveContractsBackComponent},
      {path: 'CommandeDetail', component:CommandeDetailComponent},




    ]
  },
  {path:'',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path:'Commande',component:CommandeComponent},
      {path:'Cart',component:CartComponent},
      {path:'Facture',component:FactureComponent},
      {path: 'Product', component:AllproductComponent},
      {path: 'Detail/:id', component:DetailproductComponent},
      {path: 'Forum', component:HomeForumComponent},
      {path: 'Chat', component:ChatComponent},
      {path: 'LigneCommande', component:LigneCommandeComponent},

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
