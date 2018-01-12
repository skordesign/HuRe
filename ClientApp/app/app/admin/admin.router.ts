import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from "./login/login.component";
import { AdminComponent } from "./admin.component";
import { AdminGuard } from "@guards/admin.guard";
const router: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './pages/home/home.module#HomeModule' },
            { path: 'manager-user', loadChildren: './pages/manager-user/manager-user.module#ManagerUserModule' },
            { path: 'manager-job-group', loadChildren: './pages/manager-job-group/manager-job-group.module#ManagerJobGroupModule' }
        ]
    },
    {
        path: 'login',
        component: LoginAdminComponent
    }
];

export const adminRouter = RouterModule.forChild(router);