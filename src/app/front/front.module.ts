import { NgModule } from '@angular/core';
import {RouterModule}from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {FrontRoutingModule} from './front-routing.module';
import {HeaderComponent} from './shared/header/header.component';
@NgModule({
	declarations: [
HeaderComponent,
HomepageComponent
 

],
  imports: [
FrontRoutingModule,
RouterModule

  ],
  providers: [],
  bootstrap: []
})
export class FrontModule { }
