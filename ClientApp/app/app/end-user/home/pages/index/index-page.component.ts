import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JobService } from '@services/backend/job.service';
import { share } from 'rxjs/operators';

@Component({
    selector: 'hure-index-page',
    templateUrl: 'index-page.component.html',
    styleUrls:['./index-page.component.scss']
})

export class IndexPageComponent implements OnInit {
    jobsObserver:Observable<Job[]>
    internObserver:Observable<Job[]>
    constructor(private jobSvc:JobService) { }

    ngOnInit() { 
        this.getDataAsync()
    }
    getDataAsync() {
        this.jobsObserver = this.jobSvc.getOnlyJobs().pipe(share())
        this.internObserver = this.jobSvc.getOnlyInterns().pipe(share())
    }
}