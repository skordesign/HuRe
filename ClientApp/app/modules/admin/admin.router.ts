import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin.component";
const router: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path : 'login',
        component : LoginComponent
    }
];

export const adminRouter = RouterModule.forChild(router);