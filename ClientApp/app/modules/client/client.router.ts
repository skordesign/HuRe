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
            }
        ]
    }
];

export const clientRouter = RouterModule.forChild(router);