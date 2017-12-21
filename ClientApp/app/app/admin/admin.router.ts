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
<<<<<<< HEAD
        path : 'login',
        component : LoginAdminComponent
    }
=======
        path: 'login',
        component: LoginComponent
    },

>>>>>>> 4b2aa8c2a4c252b08ce34a254adac09eb82d730f
];

export const adminRouter = RouterModule.forChild(router);