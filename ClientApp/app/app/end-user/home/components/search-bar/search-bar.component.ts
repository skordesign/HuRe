import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobGroupService } from '@services/backend/job-group.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { WorkTypeService } from '@services/backend/work-type.service';

@Component({
  selector: 'hure-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.job$) {
      this.job$.unsubscribe()
      this.work$.unsubscribe()
    }
  }
  keyword: string = ""
  jobs: JobGroup[]
  works:WorkType[]
  job$: Subscription
  work$:Subscription
  selectedJobG: number = 0
  constructor(private jobGSvc: JobGroupService, private router: Router, private workTSvc:WorkTypeService) {
    this.job$ = this.jobGSvc.getJobs().subscribe(data => {
      this.jobs = data;
    });
    this.work$ = this.workTSvc.getWorkTypes().subscribe(data=> this.works = data);
  }
  gotoSearchPage() {
    this.router.navigate(['/search'])
  }
  search(){
    this.router.navigate(['/search', { jobType: this.selectedJobG, keyword: this.keyword }])
  }
  ngOnInit() {
  }
  onJobGroupChange(jobG: any) {
     this.selectedJobG = jobG.value;
  }
}
