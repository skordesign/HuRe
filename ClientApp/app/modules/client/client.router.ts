import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ClientComponent } from "./client.component";
const router: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '', loadChildren: './home/home.module#HomeModule'
            },
            {
                path:'about', loadChildren: './introduce/introduce.module#IntroduceModule'
            },
            {
                path:'contact', loadChildren: './contact/contact.module#ContactModule'
            }
        ]
    }
];

export const clientRouter = RouterModule.forChild(router);