import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'hure-action-menu',
    templateUrl: 'action-menu.component.html',
    styleUrls: ['./action-menu.component.scss']
})

export class ActionMenuComponent implements OnInit {
    @Input() items: MenuItem[]
    constructor() { }

    ngOnInit() { }
}
export interface MenuItem {
    iconClass: string,
    text: string,
    action?: () => void,
}