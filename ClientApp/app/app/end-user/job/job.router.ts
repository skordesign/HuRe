import { Routes } from '@angular/router';
import { JobComponent } from './job.component';
import { RouterModule } from '@angular/router';
import { IndexJobPageComponent } from '@app/end-user/job/pages/index/index-page.component';

const router: Routes = [
    {
        path: '',
        component: JobComponent, children:[
            {
                path:'', component: IndexJobPageComponent
            }
        ]
    }
];

export const jobRouter = RouterModule.forChild(router);
