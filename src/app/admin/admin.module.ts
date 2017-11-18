import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {ArticlePreviewComponent} from './shared/article-preview/article-preview.component';
import {EventPreviewComponent} from './shared/event-preview/event-preview.component';
import {ProfileComponent} from './profile/profile.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {AcademicsComponent} from './academics/academics.component';
import {ResearchComponent} from './research/research.component';
import {NewsComponent} from './news/news.component';
import { ContainerBoxComponent } from './shared/container-box/container-box.component';
import { PreviewEditBoxComponent } from './shared/preview-edit-box/preview-edit-box.component';
import { AdminFooterComponent } from './shared/admin-footer/admin-footer.component';
import { ResearchNewsComponent } from './research/research-news/research-news.component';
import { LaboratoryComponent } from './research/laboratory/laboratory.component';
import { ConferencesAndSeminarsComponent } from './research/conferences-and-seminars/conferences-and-seminars.component';
import { AreasComponent } from './research/areas/areas.component';
import { PostersComponent } from './research/posters/posters.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  providers: [AuthGuard, AuthService],
  declarations: [
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    ArticlePreviewComponent,
    EventPreviewComponent,
    ProfileComponent,
    IntroductionComponent,
    AcademicsComponent,
    ResearchComponent,
    NewsComponent,
    ContainerBoxComponent,
    PreviewEditBoxComponent,
    AdminFooterComponent,
    ResearchNewsComponent,
    LaboratoryComponent,
    ConferencesAndSeminarsComponent,
    AreasComponent,
    PostersComponent
  ]
})
export class AdminModule {
}
