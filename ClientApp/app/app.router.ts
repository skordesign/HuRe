import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "./components/app/app.component";
export const routes: Routes = [
    {
        path: '', component: AppComponent, children: [
        ],
    },
    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);