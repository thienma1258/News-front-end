import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './shared/header/header.component';
const routes: Routes = [
{path:'',component:HeaderComponent,outlet:'header'},
{path:'',component:HomepageComponent},


];
 @NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(routes) ],

  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class FrontRoutingModule{ }