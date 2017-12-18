import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { JobsContainerComponent } from 'app/modules/home/jobs-container/jobs.-container.component';

const router: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const homeRouter = RouterModule.forChild(router);
