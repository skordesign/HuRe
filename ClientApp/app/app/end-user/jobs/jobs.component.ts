import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@services/backend/job.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Component({
  selector: 'hure-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  isIntership: boolean = false
  jobs$: Observable<Job[]>
  jobsHot$:Observable<Job[]>
  constructor(private route: ActivatedRoute, private jobSvc: JobService) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('internship')
    if (param == 'internship') {
      this.isIntership = true;
    }
    if(this.isIntership){
      this.getInternAsync()
    }else{
      this.getJobAsync()
    }
  }
  getInternAsync() {
      this.jobs$ = this.jobSvc.getOnlyInterns().pipe(share())
      this.jobsHot$ = this.jobSvc.getHotInterns().pipe(share())
  }
  getJobAsync(){
    this.jobs$ = this.jobSvc.getOnlyJobs().pipe(share())
    this.jobsHot$  = this.jobSvc.getHotJobs().pipe(share())
  }
}
