import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { IntroduceComponent } from "./components/introduce/introduce.component";
export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
        ],
    },
    { path: 'about', component: IntroduceComponent },
    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);