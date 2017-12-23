import { NgModule } from '@angular/core';
import { JobComponent } from './job.component';
import { jobRouter } from './job.router';
import { CoreModule } from "@core/core.module";
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { JobsContainerComponent } from '@app/end-user/job/components/job-container/jobs-container.component';
import { IndexJobPageComponent } from '@app/end-user/job/pages/index/index-page.component';

@NgModule({
    imports: [CommonModule, jobRouter, CoreModule,SharedModule],
    exports: [],
    declarations: [JobComponent, JobsContainerComponent, IndexJobPageComponent],
    providers: [],
})
export class JobModule { }