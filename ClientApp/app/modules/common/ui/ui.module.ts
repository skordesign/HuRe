import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdownItem/dropdownItem.component';
import { TabComponent } from './tabbed/tab/tab.component';
@NgModule({
    declarations: [GroupComponent, TabbedComponent, DropdownComponent, DropdownItemComponent, TabComponent],
    imports: [CommonModule],
    exports: [GroupComponent, TabbedComponent, DropdownComponent, DropdownItemComponent, TabComponent],
    providers: [],
})
export class UIModule { }