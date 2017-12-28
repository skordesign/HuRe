import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { CoreModule } from './modules/core/core.module';
import { DirectiveModule } from './modules/common/directives/directive.module';
import { FooterComponent } from "./components/footer/footer.component";
import { UIModule } from './modules/common/ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        HttpModule,
        DirectiveModule,
        FormsModule, UIModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
