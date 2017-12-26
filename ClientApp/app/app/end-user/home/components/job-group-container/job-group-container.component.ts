import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'hure-job-group-container',
    templateUrl: './job-group-container.component.html',
    styleUrls: ['./job-group-container.component.scss']
})
export class JobGroupComponent implements OnInit {
    private test = [1, 2, 3, 4, 5, 6, 7, 8];
    ngOnInit(){}
}