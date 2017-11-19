import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomepageComponent} from './homepage/homepage.component';
import {HeaderComponent} from './shared/header/header.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AcademicComponent} from './academic/academic.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ResearchComponent} from './research/research.component';
import {NewsComponent} from './news/news.component';
import { ResearchDetailsComponent } from './research-details/research-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
const routes: Routes = [
  {path: '', component: HeaderComponent, outlet: 'header'},
  {path: '', component: HomepageComponent},
  {path: '', component: FooterComponent, outlet: 'footer'},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'introduction/:title', component: IntroductionComponent},
  {path: 'academic', component: AcademicComponent},
  {path: 'academic/:title', component: AcademicComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'research/:title', component: ResearchComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:title', component: NewsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],

  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class FrontRoutingModule {
}
