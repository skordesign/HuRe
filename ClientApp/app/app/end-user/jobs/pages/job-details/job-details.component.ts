import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@services/backend/job.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
import { Http } from '@angular/http';
import { CommonHttpService } from '@services/backend/common-http.service';
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from '@services/backend/company.service';

@Component({
  selector: 'hure-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }
  sub$: Subscription
  job: Job
  jobRelated$: Observable<Job[]>
  constructor(private route: ActivatedRoute, private jobSvc: JobService, private companySvc: CompanyService) { }
  contentHTML: Observable<string>
  ngOnInit() {
    this.route.params.subscribe(param => {
      let jobId = param['id']
      this.sub$ = this.jobSvc.getJobDetail(+jobId!).subscribe(result => {
        this.job = result;
        this.jobRelated$ = this.companySvc.getJobOfCompany(this.job.companyId).pipe(share())
      })
    })

  }
}
