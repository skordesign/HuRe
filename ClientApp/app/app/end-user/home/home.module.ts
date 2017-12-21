import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { CoreModule } from "@core/core.module";
import { JobsContainerComponent } from '@app/end-user/home/components/jobs-container/jobs.-container.component';
import { SharedModule } from '@shared/shared.module';
import { IndexPageComponent } from '@app/end-user/home/pages/index/index-page.component';
import { SearchPageComponent } from '@app/end-user/home/pages/search/search-page.component';

@NgModule({
    imports: [homeRouter, CoreModule, SharedModule],
    exports: [],
    declarations: [HomeComponent, JobsContainerComponent, IndexPageComponent, SearchPageComponent],
    providers: [],
})
export class HomeModule { }
