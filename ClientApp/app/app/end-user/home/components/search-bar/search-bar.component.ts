import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobGroupService } from '@services/backend/job-group.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'hure-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
  keyword: string = ""
  data: JobGroup[]
  sub: Subscription
  selectedJobG: number = 0
  constructor(private jobGSvc: JobGroupService, private router: Router) {
    this.sub = this.jobGSvc.getJobs().subscribe(data => {
      this.data = data;
    });
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
