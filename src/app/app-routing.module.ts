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

const routes: Routes = [
  {path:'admin',component:BackOfficeComponent,
    children: [
      {path: '', component:HomeBackComponent},
      {path: 'adminProduct', component:BackproductComponent},
      {path: 'form', component:AddproductComponent},
      {path: 'detailp', component:AdmindetailComponent},


    ]
  },
  {path:'',component:FrontOfficeComponent,
    children: [
      {path: '', component:HomeFrontComponent},
      {path: 'Product', component:AllproductComponent},
      {path: 'Detail/:id', component:DetailproductComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
