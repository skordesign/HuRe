import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { CoreModule } from './modules/core/core.module';
import { DirectiveModule } from './modules/common/directives/directive.module';
<<<<<<< HEAD
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
=======
import { ServiceModule } from './modules/common/services/service.module';
import { UIModule } from './modules/common/ui/ui.module';

@NgModule({
    declarations: [
        AppComponent
>>>>>>> cd5300c79ef1054f7afc67a3a48420105d6cb975
    ],
    imports: [ 
        CommonModule,
        ServiceModule,
        CoreModule,
        HttpModule,
        DirectiveModule,
        UIModule,
        FormsModule,
        routing,
        UIModule
    ]
})
export class AppModuleShared {
}
