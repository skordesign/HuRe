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
  constructor(private route: ActivatedRoute, private jobSvc: JobService) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('internship')
    if (param == 'internship') {
      this.isIntership = true;
    }
    this.getDataAsync()
  }
  getDataAsync() {
    if (this.isIntership) {
      this.jobs$ = this.jobSvc.getOnlyInterns().pipe(share())
    } else {
      this.jobs$ = this.jobSvc.getOnlyJobs().pipe(share())
    }
  }
}
