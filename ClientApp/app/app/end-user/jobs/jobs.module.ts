import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { jobsRouter } from '@app/end-user/jobs/jobs.router';

@NgModule({
  imports: [
    CommonModule, jobsRouter
  ],
  declarations: [JobsComponent]
})
export class JobsModule { }