import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventService } from '@services/backend/event.service';
import { share } from 'rxjs/operators';

@Component({
    selector: 'hure-event-page',
    templateUrl: 'event-page.component.html',
    styleUrls: ['./event-page.component.scss']
})

export class EventPageComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}