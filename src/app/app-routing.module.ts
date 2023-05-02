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
import {MeilleuremployeComponent} from "./reclamationcomonenets/meilleuremploye/meilleuremploye.component";
import {ChartComponent} from "./reclamationcomonenets/chart/chart.component";
import {ChartsatisfactionComponent} from "./reclamationcomonenets/chartsatisfaction/chartsatisfaction.component";
import {ReclamationuserComponent} from "./reclamationcomonenets/reclamationuser/reclamationuser.component";
import {DetailsreclamationComponent} from "./reclamationcomonenets/detailsreclamation/detailsreclamation.component";
import {ProduitsimilairesComponent} from "./reclamationcomonenets/produitsimilaires/produitsimilaires.component";
import {GetrecComponent} from "./reclamationcomonenets/getrec/getrec.component";
import {RetournesalaireComponent} from "./reclamationcomonenets/retournesalaire/retournesalaire.component";
import {ListeinterventionComponent} from "./listeintervention/listeintervention.component";
import {AddinterventionComponent} from "./addintervention/addintervention.component";
import {LgcommandesComponent} from "./lgcommandes/lgcommandes.component";
import {DetailslgComponent} from "./detailslg/detailslg.component";

import { MapsComponent } from './maps/maps.component';
import { AllLivreurComponent } from './all-livreur/all-livreur.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundBackComponent } from './not-found-back/not-found-back.component';
import { LivreurComponent } from './livreur/livreur.component';
import { BestemployerComponent } from './bestemployer/bestemployer.component';
import { AllLivraisonsfrontComponent } from './all-livraisonsfront/all-livraisonsfront.component';
import {HomeBackForumComponent} from "./Forum/home-back-forum/home-back-forum.component";
import {ChatPriveComponent} from "./Forum/chat-prive/chat-prive.component";
import {DetailBackForumComponent} from "./Forum/detail-back-forum/detail-back-forum.component";

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
      {path:'bestemployer',component:BestemployerComponent},
      {path:'addLivreur',component:LivreurComponent},
      {path:'retrieveAllLivreur',component:AllLivreurComponent},
      {path:'Commandeback',component:CommandebackComponent},
      {path:'HomeBackForum',component:HomeBackForumComponent},
      {path:'Factureback',component:FacturebackComponent},
      {path:'Cartback',component:CartbackComponent},
      {path: 'addDelivery', component:LivraisonComponent},
      {path:'getAllDeliveries',component:AllLivraisonComponent},
      {path: 'adminProduct', component:BackproductComponent},
      {path: 'addProductBack', component:AddproductComponent},
      {path: 'detailp/:id', component:AdmindetailComponent},
      {path: 'retrieveusersback', component:RetrieveUsersBackComponent},
      {path: 'modifyusersback/:id', component:ModifyUsersBackComponent},

      {path: 'meilleur', component:MeilleuremployeComponent},
      {path: 'chart', component:ChartComponent},
      {path: 'chartsatisfaction', component:ChartsatisfactionComponent},
      {path: 'recadmin', component:GetrecComponent},
      {path: 'retournesalaire/:idrec', component:RetournesalaireComponent},
      {path: 'listeinter', component:ListeinterventionComponent},
      {path: 'addinter', component:AddinterventionComponent},

      {path: 'map',component:MapsComponent},
      {path: '**', component:NotFoundBackComponent},
      

      {path: 'backDF/:id', component:DetailBackForumComponent},
      {path: 'retrievemarketsback', component:RetrieveMarketsBackComponent},
      {path: 'retrievecontractsback', component:RetrieveContractsBackComponent},
      {path: 'CommandeDetail', component:CommandeDetailComponent},




    ]
  },
  {path:'amal',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path:'addmydelivery',component:AllLivraisonsfrontComponent},
      {path: 'map',component:MapsComponent},
      {path: 'Chat', component:ChatComponent},
      {path: 'ChatP', component:ChatPriveComponent},
      {path:'Commande',component:CommandeComponent},
      {path:'Cart',component:CartComponent},
      {path:'Facture',component:FactureComponent},
      {path: 'Product', component:AllproductComponent},
      {path: 'Detail/:id', component:DetailproductComponent},
      {path: 'Forum', component:HomeForumComponent},
      {path: 'Chat', component:ChatComponent},
      {path: 'recuser', component:ReclamationuserComponent},
      {path:'detailsrec/:idrec',component:DetailsreclamationComponent},
      {path:'prodsimilaire/:idrec',component:ProduitsimilairesComponent},
      {path: 'lislgcmd', component:LgcommandesComponent},
      {path: 'Detalslg/:idLigneCommande', component:DetailslgComponent},

      {path: '**', component:NotFoundComponent},

      {path: 'LigneCommande', component:LigneCommandeComponent},


    ]
  },


];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
