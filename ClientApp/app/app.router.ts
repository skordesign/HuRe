import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "./app/app.component";
export const routes: Routes = [
    {
        path: '', loadChildren: './modules/home/home.module#HomeModule'
    },{
        path:'contact', loadChildren:'./modules/contact/contact.module#ContactModule'
    },{
        path:'about', loadChildren: './modules/introduce/introduce.module#IntroduceModule'
    },
    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);