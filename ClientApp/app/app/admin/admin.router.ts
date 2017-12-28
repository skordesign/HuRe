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
            { path: '', loadChildren: './pages/home/home.module#HomeModule' },
            { path: 'manager-user', loadChildren: './pages/manager-user/manager-user.module#ManagerUserModule' }
        ]
    },
    {
        path: 'login',
        component: LoginAdminComponent
    }
];

export const adminRouter = RouterModule.forChild(router);