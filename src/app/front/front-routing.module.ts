import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './shared/header/header.component';
import { SubMenuComponent } from './shared/sub-menu/sub-menu.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AcademicComponent} from './academic/academic.component';
import {FooterComponent} from './shared/footer/footer.component';

const routes: Routes = [
  {path: '', component: HeaderComponent, outlet: 'header'},
  {path: '', component: HomepageComponent},
  {path: '', component: FooterComponent, outlet: 'footer'},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'academic', component: AcademicComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],

  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class FrontRoutingModule {
}
