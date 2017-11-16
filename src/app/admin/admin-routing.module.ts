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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
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
        component: ResearchComponent
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
