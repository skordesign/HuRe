import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventService } from '@services/backend/event.service';
import { share } from 'rxjs/operators';

@Component({
    selector: 'hure-event-page',
    templateUrl: 'event-page.component.html',
    styleUrls: ['./event-page.component.scss']
})

export class EventPageComponent implements OnInit, OnDestroy {


    ngOnDestroy(): void {

    }
    events$: Observable<EventItem[]>;
    @Input() title: string = "Event nè";
    @Input() limit: number = 5;
    constructor(private eventSvc: EventService) {
        this.getDataAsync();
    }
    getDataAsync() {
        this.events$ = this.eventSvc.getEvents().pipe(share());
        console.log(this.events$);
    }
    ngOnInit() { }
}