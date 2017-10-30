import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {HomepageComponent} from './homepage/homepage.component';
import {FrontRoutingModule} from './front-routing.module';
import {HeaderComponent} from './shared/header/header.component';
import {SubMenuComponent} from './shared/sub-menu/sub-menu.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AcademicComponent} from './academic/academic.component';
import { PostComponent } from './shared/post/post.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    SubMenuComponent,
    IntroductionComponent,
    AcademicComponent,
    PostComponent
  ],
  imports: [
    FrontRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class FrontModule {
}
