import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from "./login/login.component";
import { AdminComponent } from "./admin.component";
import { AdminGuard } from "@guards/admin.guard";
import { DashboardComponent } from "@app/admin/dashboard/dashboard.component";
const router: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', component: DashboardComponent }
        ]
    },
    {
        path: 'login',
        component: LoginAdminComponent
    }
];

export const adminRouter = RouterModule.forChild(router);