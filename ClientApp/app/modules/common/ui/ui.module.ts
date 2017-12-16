import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdownItem/dropdownItem.component';
import { TabComponent } from './tabbed/tab/tab.component';
import { JobComponent } from './job/job.component';
import { BlogComponent } from './blog/blog.component';
@NgModule({
    declarations: [GroupComponent, TabbedComponent, DropdownComponent, DropdownItemComponent, TabComponent, JobComponent, BlogComponent],
    imports: [CommonModule],
    exports: [GroupComponent, TabbedComponent, DropdownComponent, DropdownItemComponent, TabComponent, JobComponent, BlogComponent],
    providers: [],
})
export class UIModule { }