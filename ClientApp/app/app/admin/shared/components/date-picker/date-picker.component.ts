import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
const now = new Date();
@Component({
    selector: 'admin-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
    public model: any;
    @Output() timeChange: EventEmitter<any> = new EventEmitter();
    @Input() currentValue: Date;
    constructor() { }

    ngOnInit() {
        //can buoc nay k se loi
        this.currentValue = new Date(this.currentValue)
        if (this.currentValue) {
            this.model = { year: this.currentValue.getFullYear(), month: this.currentValue.getMonth() + 1, day: this.currentValue.getDate() };
        } else {
            this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        }
        this.timeChange.emit(this.model.year + '/' + this.model.month + '/' + this.model.day)
    }
    getTime() {
        return this.model;
    }
    change() {
        this.timeChange.emit(this.model.year + '/' + this.model.month + '/' + this.model.day)
    }
}
