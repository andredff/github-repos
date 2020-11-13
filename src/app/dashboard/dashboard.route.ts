import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardAppComponent } from './dashboard.app.component';
import { UserComponent } from './user/user.component';

const dashboardRouterConfig: Routes = [
    {
        path: '', component: DashboardAppComponent,
        children: [
            { path: 'user', component: UserComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRouterConfig)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
