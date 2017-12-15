import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DropdownItemComponent } from './dropdownItem/dropdownItem.component';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
     // change return DropdownItemComponent => this.value to get value
     @Output() change = new EventEmitter<any>();
     @Input() placeholder = "Hello"
     // isActivated = true => dropdown show items
     isActivated = false;
     items: DropdownItemComponent[] = [];
     selectedItem: any;
     constructor() { }
     addItem(item: DropdownItemComponent) {
         this.items.push(item);
     }
     selectItemEmit(item: DropdownItemComponent) {
         this.selectItem(item);
         this.change.emit(item);
     }
     selectItem(item: DropdownItemComponent) {
         this.items.forEach(i => i.isSelected = false);
         item.isSelected = true;
         this.placeholder = item.text;
         this.selectedItem = item;
     }
     ngOnInit() { }
}