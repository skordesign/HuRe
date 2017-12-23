import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EndUserComponent } from '@app/end-user/end-user.component';
import { ErrorComponent } from '@app/end-user/error/error.component';
const router: Routes = [
    {
        path: '',
        component: EndUserComponent,
        children: [
            {
                path: '', loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'about', loadChildren: './introduce/introduce.module#IntroduceModule'
            },
            {
                path: 'contact', loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'jobs', loadChildren: './job/job.module#JobModule'
            },
            {
                path: 'internship', loadChildren: './job/job.module#JobModule'
            },
            // {
            //     path: '**', component: ErrorComponent
            // }
        ]
    }
];

export const endUserRouter = RouterModule.forChild(router);