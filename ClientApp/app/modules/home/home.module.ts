import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [homeRouter, CoreModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
