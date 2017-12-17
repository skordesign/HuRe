import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { CoreModule } from '../core/core.module';
import { UIModule } from '../common/ui/ui.module';

@NgModule({
    imports: [homeRouter, CoreModule, UIModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
