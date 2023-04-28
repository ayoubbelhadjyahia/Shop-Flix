import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackOfficeComponent} from "./back-office/back-office.component";
import {HomeForumComponent} from "./Forum/home-forum/home-forum.component";
import {FrontOfficeComponent} from "./front-office/front-office.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import {HomeBackComponent} from "./home-back/home-back.component";
import {CommandeComponent} from "./commande/commande.component";
import {NotFoundError} from "rxjs";
import {CartComponent} from "./cart/cart.component";
import {FactureComponent} from "./facture/facture.component";
import {CommandebackComponent} from "./commandeback/commandeback.component";
import {CartbackComponent} from "./cartback/cartback.component";
import {FacturebackComponent} from "./factureback/factureback.component";

const routes: Routes = [


  {path:'admin',component:BackOfficeComponent,
    children: [
      {path: '', component:HomeBackComponent},
      {path:'Commandeback',component:CommandebackComponent},
      {path:'Factureback',component:FacturebackComponent},
      {path:'Cartback',component:CartbackComponent},


    ]
  },
  {path:'',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path:'Commande',component:CommandeComponent},
      {path:'Cart',component:CartComponent},
      {path:'Facture',component:FactureComponent},


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
