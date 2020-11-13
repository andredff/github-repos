import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { SideProfileComponent } from './side-profile/side-profile.component';
import { DashboardRoutingModule } from './dashboard.route';
import { RouterModule } from '@angular/router';
import { DashboardAppComponent } from './dashboard.app.component';



@NgModule({
  declarations: [
    DashboardAppComponent,
    UserComponent,
    SideProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
