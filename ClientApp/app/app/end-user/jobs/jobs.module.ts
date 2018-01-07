import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { jobsRouter } from '@app/end-user/jobs/jobs.router';
import { SharedModule } from '@shared/shared.module';
import { JobsFilterComponent } from '@app/end-user/jobs/components/jobs-filter/jobs-filter.component';

@NgModule({
  imports: [
    CommonModule, jobsRouter, SharedModule
  ],
  declarations: [JobsComponent, JobsFilterComponent]
})
export class JobsModule { }