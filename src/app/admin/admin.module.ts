import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './shared/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard],
  declarations: [DashboardComponent, LoginComponent, AdminComponent]
})
export class AdminModule {
}
