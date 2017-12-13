import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { CoreModule } from './modules/core/core.module';
import { DirectiveModule } from './modules/common/directives/directive.module';
import { HomeComponent } from "./components/home/home.component";
import { routing } from "./app.router";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        HttpModule,
        DirectiveModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ]),
        routing
    ]
})
export class AppModuleShared {
}
