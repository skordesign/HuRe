import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdownItem/dropdownItem.component';
import { TabComponent } from './tabbed/tab/tab.component';
import { RatingBarComponent } from './rating/rating.component';
@NgModule({
    declarations: [GroupComponent, TabbedComponent, DropdownComponent,
        DropdownItemComponent, TabComponent, RatingBarComponent],
    imports: [CommonModule],
    exports: [GroupComponent, TabbedComponent, DropdownComponent, DropdownItemComponent, TabComponent,
        RatingBarComponent],
    providers: [],
})
export class UIModule { }