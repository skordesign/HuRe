import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hure-jobs-container-job-page',
    templateUrl: 'jobs-container.component.html',
    styleUrls:['./jobs-container.component.scss']
})

export class JobsContainerComponent implements OnInit {
    @Input() jobs: any[] =[{},{}]
    @Input() title:string = "Công việc";
    constructor() { }
    ngOnInit() { }
}