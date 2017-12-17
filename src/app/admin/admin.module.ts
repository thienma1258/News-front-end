import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
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
import { EditArticleDetailComponent } from './shared/edit-article-detail/edit-article-detail.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { DepartmentNewsComponent } from './news/department-news/department-news.component';
import { CourseNewsComponent } from './news/course-news/course-news.component';
import { EventsComponent } from './news/events/events.component';
import { SchoolLeadershipComponent } from './news/school-leadership/school-leadership.component';
import { CalendarComponent } from './news/calendar/calendar.component';
import {UniversityService} from '../shared/services/university.service';
import {ArticleService} from '../shared/services/article.service';
import {ImageUploadModule} from 'angular2-image-upload';
import {EventService} from '../shared/services/event.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {SharedModule} from '../shared/shared/shared.module';
import {FileSelectDirective, FileUploadModule} from 'ng2-file-upload';
import { EditEventDetailComponent } from './shared/edit-event-detail/edit-event-detail.component';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {InformationService} from '../shared/services/information.service';
import { AdvisorInfomationComponent } from './shared/advisor-infomation/advisor-infomation.component';
import {AdvisorService} from '../shared/services/advisor.service';
import { AdvisorListComponent } from './shared/advisor-list/advisor-list.component';
import {ResearchServices} from '../shared/services/research.services';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ImageUploadModule.forRoot(),
    FileUploadModule,
    DateTimePickerModule,
  ],

  providers: [AuthGuard, AuthService, UniversityService, ArticleService, EventService, DatePipe, InformationService, AdvisorService,
    ResearchServices],
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
    PostersComponent,
    EditArticleDetailComponent,
    DepartmentNewsComponent,
    CourseNewsComponent,
    EventsComponent,
    SchoolLeadershipComponent,
    CalendarComponent,
    ChangePasswordComponent,
    EditEventDetailComponent,
    AdvisorInfomationComponent,
    AdvisorListComponent,
  ]
})

export class AdminModule {
}
