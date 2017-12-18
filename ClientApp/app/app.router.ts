import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "./app/app.component";
export const routes: Routes = [
    {
        path: '', loadChildren: './modules/client/client.module#ClientModule'
    },
    {
        path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'
    },
    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);