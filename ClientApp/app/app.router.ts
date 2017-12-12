import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
        ]
    },

    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);