import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackOfficeComponent} from "./back-office/back-office.component";
import {HomeForumComponent} from "./Forum/home-forum/home-forum.component";
import {FrontOfficeComponent} from "./front-office/front-office.component";
import {HomeFrontComponent} from "./home-front/home-front.component";
import {HomeBackComponent} from "./home-back/home-back.component";
import {AllproductComponent} from "./Product/allproduct/allproduct.component";
import {DetailproductComponent} from "./Product/detailproduct/detailproduct.component";
import {BackproductComponent} from "./Product/backproduct/backproduct.component";
import {AddproductComponent} from "./Product/addproduct/addproduct.component";
import {AdmindetailComponent} from "./Product/admindetail/admindetail.component";

import {ChatComponent} from "./Forum/chat/chat.component";
import {RetrieveUsersBackComponent} from "./User/retrieve-users-back/retrieve-users-back.component";
import {ModifyUsersBackComponent} from "./User/modify-users-back/modify-users-back.component";
import {LoginComponent} from "./User/login/login.component";


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'admin',component:BackOfficeComponent,
    children: [
      {path: '', component:HomeBackComponent},
      {path: 'adminProduct', component:BackproductComponent},
      {path: 'addProductBack', component:AddproductComponent},
      {path: 'detailp', component:AdmindetailComponent},
      {path: 'retrieveusersback', component:RetrieveUsersBackComponent},
      {path: 'modifyusersback/:id', component:ModifyUsersBackComponent},



    ]
  },
  {path:'',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path: 'Product', component:AllproductComponent},
      {path: 'Detail/:id', component:DetailproductComponent},
      {path: 'Forum', component:HomeForumComponent},
      {path: 'Chat', component:ChatComponent},


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
