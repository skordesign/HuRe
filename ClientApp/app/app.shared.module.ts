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
import { IntroduceComponent } from "./components/introduce/introduce.component";
import { UIModule } from './modules/common/ui/ui.module';
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        IntroduceComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        HttpModule,
        DirectiveModule,
        FormsModule,
        routing,
        UIModule
    ]
})
export class AppModuleShared {
}
