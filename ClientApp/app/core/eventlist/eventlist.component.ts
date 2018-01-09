import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventService } from '@services/backend/event.service';
import { share } from 'rxjs/operators';

@Component({
    selector: 'hure-eventlist',
    templateUrl: 'eventlist.component.html',
    styleUrls: ['./eventlist.component.scss']
})

export class EventListComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
    }
    events$: Observable<EventItem[]>;
    @Input() title: string;
    @Input() limit: number;
    constructor(private eventSvc: EventService) {
        this.getDataAsync();
    }
    getDataAsync() {
        this.events$ = this.eventSvc.getEvents().pipe(share());
    }
    ngOnInit() { }
}