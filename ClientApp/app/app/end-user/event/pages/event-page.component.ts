import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hure-event-page',
    templateUrl: 'event-page.component.html',
    styleUrls:['./event-page.component.scss']
})

export class EventPageComponent implements OnInit {
    @Input() events: any[] =[{},{}]
    @Input() title:string = "Event nè";

    constructor() { }

    ngOnInit() { }
}