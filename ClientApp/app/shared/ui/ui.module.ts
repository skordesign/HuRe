import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdownItem/dropdownItem.component';
import { TabComponent } from './tabbed/tab/tab.component';
import { JobComponent } from './job/job.component';
import { BlogComponent } from './blog/blog.component';
import { RatingBarComponent } from './rating/rating.component';
import { ExpansibleCardComponent } from './expansible-card/expansible-card.component';
import { PopoverComponent } from './popover/popover.component';
import { DirectiveModule } from '@directives/directive.module';
@NgModule({
    declarations: [GroupComponent, TabbedComponent, DropdownComponent, 
        DropdownItemComponent, TabComponent, JobComponent, BlogComponent, 
        RatingBarComponent, ExpansibleCardComponent, PopoverComponent],
    imports: [CommonModule, DirectiveModule],
    exports: [GroupComponent, TabbedComponent, DropdownComponent, 
        DropdownItemComponent, TabComponent, JobComponent, 
        BlogComponent, RatingBarComponent, ExpansibleCardComponent, PopoverComponent],
    providers: [],
})
export class UIModule { }