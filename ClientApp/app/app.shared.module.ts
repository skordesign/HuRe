import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { CoreModule } from './modules/core/core.module';
import { DirectiveModule } from './modules/common/directives/directive.module';
import { routing } from "./app.router";
import { UIModule } from './modules/common/ui/ui.module';
import { ServiceModule } from "./modules/common/services/service.module";

@NgModule({
    declarations: [AppComponent
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
