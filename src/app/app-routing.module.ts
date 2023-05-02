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
import { MapsComponent } from './maps/maps.component';
import { AllLivreurComponent } from './all-livreur/all-livreur.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundBackComponent } from './not-found-back/not-found-back.component';
import { LivreurComponent } from './livreur/livreur.component';
import { BestemployerComponent } from './bestemployer/bestemployer.component';
import { AllLivraisonsfrontComponent } from './all-livraisonsfront/all-livraisonsfront.component';



const routes: Routes = [
  {path:'Login',component:LoginComponent},

  {path:'admin',component:BackOfficeComponent,
    children: [
      {path: '', component:HomeBackComponent},
      {path:'bestemployer',component:BestemployerComponent},
      {path:'addLivreur',component:LivreurComponent},
      {path:'retrieveAllLivreur',component:AllLivreurComponent},
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
      {path: 'map',component:MapsComponent},
      {path: '**', component:NotFoundBackComponent},
      


    ]
  },
  {path:'',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path:'addmydelivery',component:AllLivraisonsfrontComponent},
      {path: 'map',component:MapsComponent},
      {path:'Commande',component:CommandeComponent},
      {path:'Cart',component:CartComponent},
      {path:'Facture',component:FactureComponent},
      {path: 'Product', component:AllproductComponent},
      {path: 'Detail/:id', component:DetailproductComponent},
      {path: 'Forum', component:HomeForumComponent},
      {path: 'Chat', component:ChatComponent},
      {path: '**', component:NotFoundComponent},
      

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
