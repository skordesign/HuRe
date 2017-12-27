import { Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { EventPageComponent } from '@app/end-user/event/pages/event-page.component';


const router: Routes = [
    {
        path: '',
        component: EventComponent, children:[
            {
                path:'', component: EventPageComponent
            }
           
        ]
    }
];

export const eventRouter = RouterModule.forChild(router);