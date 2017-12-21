import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from "./app.router";
import { AppComponent } from './app/app.component';
import { ServiceModule } from '@services/service.module';
import { UIModule } from '@ui/ui.module';
import { DirectiveModule} from '@directives/directive.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
    declarations: [AppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        SharedModule,
        FormsModule,
        routing,
    ]
})
export class AppModuleShared {
}
