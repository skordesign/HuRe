import { Router, Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { IntroduceComponent } from "./components/introduce/introduce.component";
import { ContactComponent } from "./components/contact/contact.component";
export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
        ],
    },
    { path: 'about', component: IntroduceComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);