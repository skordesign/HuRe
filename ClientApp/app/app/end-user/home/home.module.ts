import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { UIModule } from "@ui/ui.module";
import { CoreModule } from "@core/core.module";
import { JobsContainerComponent } from '@app/end-user/home/jobs-container/jobs.-container.component';

@NgModule({
    imports: [homeRouter, CoreModule, UIModule],
    exports: [],
    declarations: [HomeComponent, JobsContainerComponent],
    providers: [],
})
export class HomeModule { }
