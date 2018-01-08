import { Component, OnInit, EventEmitter, Output } from '@angular/core';
const now = new Date();
@Component({
    selector: 'admin-sex-select',
    templateUrl: './sex-select.component.html',
    styleUrls: ['./sex-select.component.scss']
})
export class SexSeletComponent implements OnInit {
    private sex: boolean;
    @Output() sexSelected: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() {

    }
    change() {
        this.sexSelected.emit(this.sex)
    }
}
