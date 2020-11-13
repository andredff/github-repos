import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { DashboardRoutingModule } from './dashboard.route';
import { RouterModule } from '@angular/router';
import { DashboardAppComponent } from './dashboard.app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { StarredComponent } from './starred/starred.component';
import { UserService } from './services/user.service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardAppComponent,
    UserComponent,
    ProfileComponent,
    RepositoriesComponent,
    StarredComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }
