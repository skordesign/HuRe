import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from '@app/end-user/home/pages/search/search-page.component';
import { IndexPageComponent } from '@app/end-user/home/pages/index/index-page.component';

const router: Routes = [
    {
        path: '',
        component: HomeComponent, children:[
            {
                path:'', component: IndexPageComponent
            },
            {
                path:'search', component: SearchPageComponent
            }
        ]
    }
];

export const homeRouter = RouterModule.forChild(router);
