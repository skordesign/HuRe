import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
const now = new Date();
@Component({
    selector: 'admin-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class AdminDropdownComponent implements OnInit {
    private valueSelected: any = '';
    @Input() Title: string;
    @Input() Models: string;
    @Input() ValueShow: string;
    @Input() ValueSelect: string;
    @Output() valueChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() {

    }
    change() {
        this.valueChange.emit(this.valueSelected);
    }
}
