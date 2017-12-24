import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { JobService } from '@services/backend/job.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Component({
    selector: 'hure-jobs-container',
    templateUrl: 'jobs-container.component.html',
    styleUrls: ['./jobs-container.component.scss']
})

export class JobsContainerComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
    }
    jobs$: Observable<Job[]>
    @Input() title: string = "Công việc";
    @Input() limit:number = 5;
    constructor(private jobSvc: JobService) {
        this.getDataAsync();
    }
    ngOnInit() { }
    getDataAsync() {
        this.jobs$ = this.jobSvc.getJobs().pipe(share());
    }

}