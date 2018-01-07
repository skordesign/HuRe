import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { JobGroupService } from '@services/backend/job-group.service';
import { WorkTypeService } from '@services/backend/work-type.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'hure-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss']
})
export class JobsFilterComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.jobG$.unsubscribe()
  }
  jobG$:Subscription
  jobG:JobGroup[]
  @Output() change: EventEmitter<JobsFilter> = new EventEmitter();
  data = []
  filterObj: {
    workTypeId?: number,
    jobGroupId?: number,
    lowestSalary?: number,
    highestSalary?: number
  }={}
  constructor(private jobGSvc:JobGroupService, private workTSvc:WorkTypeService) { }

  ngOnInit() {
    this.jobG$ = this.jobGSvc.getJobs().subscribe(jg=> this.jobG = jg);
  }

  filter() {

  }
  onJobGroupChange(job:any){
    this.filterObj.jobGroupId = job.value;
  }
}

interface JobsFilter {

}
