import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth.guard';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import { ArticlePreviewComponent } from './shared/article-preview/article-preview.component';
import { EventPreviewComponent } from './shared/event-preview/event-preview.component';

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
  declarations: [DashboardComponent, LoginComponent, AdminComponent, ArticlePreviewComponent, EventPreviewComponent]
})
export class AdminModule {
}
