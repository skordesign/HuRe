import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { CoreModule } from '../core/core.module';
import { UIModule } from '../common/ui/ui.module';
import { JobsContainerComponent } from 'app/modules/home/jobs-container/jobs.-container.component';

@NgModule({
    imports: [homeRouter, CoreModule, UIModule],
    exports: [],
    declarations: [HomeComponent, JobsContainerComponent],
    providers: [],
})
export class HomeModule { }
