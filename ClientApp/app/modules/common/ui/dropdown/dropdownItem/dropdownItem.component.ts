import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Component({
    selector: 'app-dropdownItem',
    templateUrl: './dropdownItem.component.html'
})
export class DropdownItemComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
    }
    // value is object;
    @Input() value: any;
    // content is option text in dropdown
    @Input() text: string;
    @Input() isSelected: boolean;
    constructor(private dropdown: DropdownComponent) {
        this.dropdown.addItem(this);
    }
    selectItem(item: DropdownItemComponent) {
        this.dropdown.selectItemEmit(item);
    }
    ngOnInit() {
        if (this.isSelected) {
            this.dropdown.selectItem(this);
        }
    }
}