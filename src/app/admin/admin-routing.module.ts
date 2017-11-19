import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/auth.guard';
import {ProfileComponent} from "./profile/profile.component";
import {IntroductionComponent} from "./introduction/introduction.component";
import {AcademicsComponent} from "./academics/academics.component";
import {ResearchComponent} from "./research/research.component";
import {NewsComponent} from "./news/news.component";
import {ResearchNewsComponent} from "./research/research-news/research-news.component";
import {LaboratoryComponent} from "./research/laboratory/laboratory.component";
import {ConferencesAndSeminarsComponent} from "./research/conferences-and-seminars/conferences-and-seminars.component";
import {AreasComponent} from "./research/areas/areas.component";
import {PostersComponent} from "./research/posters/posters.component";
import {EditArticleDetailComponent} from "./shared/edit-article-detail/edit-article-detail.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'academics',
        component: AcademicsComponent
      },
      {
        path: 'research',
        component: ResearchComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/research/research-news',
            pathMatch: 'full'
          },
          {
            path: 'edit/:id',
            component: EditArticleDetailComponent
          },
          {
            path: 'research-news',
            component: ResearchNewsComponent
          },
          {
            path: 'laboratory',
            component: LaboratoryComponent
          },
          {
            path: 'conferences-seminars',
            component: ConferencesAndSeminarsComponent
          },
          {
            path: 'areas',
            component: AreasComponent
          },
          {
            path: 'posters',
            component: PostersComponent
          }
        ]
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AdminRoutingModule { }
