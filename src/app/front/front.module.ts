import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {FrontRoutingModule} from './front-routing.module';
import {ResearchComponent} from './research/research.component';
import {HeaderComponent} from './shared/header/header.component';
import {SubMenuComponent} from './shared/sub-menu/sub-menu.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AcademicComponent} from './academic/academic.component';
import {FooterComponent} from './shared/footer/footer.component';
import { ArticlePreviewComponent } from './shared/article-preview/article-preview.component';
import { EventPreviewComponent } from './shared/event-preview/event-preview.component';
import { FacebookModule } from 'ngx-facebook';
import { ArticleContentComponent } from './shared/article-content/article-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    SubMenuComponent,
    IntroductionComponent,
    AcademicComponent,
    FooterComponent,
    ArticlePreviewComponent,
    EventPreviewComponent,
    ResearchComponent,
    ArticleContentComponent
  ],
  imports: [
    FrontRoutingModule,
    RouterModule,
    CommonModule,
    FacebookModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: []
})
export class FrontModule {
}
