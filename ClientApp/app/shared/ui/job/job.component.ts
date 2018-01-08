import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/frontend/data.service';
@Component({
    selector: 'hure-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
export class JobComponent {
    constructor(private router: Router, private data:DataService) { }
    @Input() job: Job;
    apply() {
        if(this.job){
            this.data.data = this.job;
            this.router.navigate(['jobs','details', this.job?this.job.id.toString():1]);
        }
    }
}