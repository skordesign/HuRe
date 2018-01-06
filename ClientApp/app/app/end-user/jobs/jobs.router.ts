import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { JobsComponent } from '@app/end-user/jobs/jobs.component';

const router: Routes = [
    {
        path: '',
        component: JobsComponent
    }
];

export const jobsRouter = RouterModule.forChild(router);
