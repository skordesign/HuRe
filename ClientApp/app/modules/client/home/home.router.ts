import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

const router: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const homeRouter = RouterModule.forChild(router);
