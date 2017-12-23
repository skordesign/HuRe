import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'hure-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
export class JobComponent {
    constructor(private router: Router) { }
    @Input() job: Job;
    apply() {
        if(this.job){
            this.router.navigate(['jobs', this.job?this.job.id.toString():1]);
        }
    }
}