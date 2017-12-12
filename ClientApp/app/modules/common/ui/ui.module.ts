import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { JobComponent } from './job/job.component';
import { BlogComponent} from './blog/blog.component';
@NgModule({
    declarations: [ GroupComponent,JobComponent,BlogComponent],
    imports: [ CommonModule],
    exports: [ GroupComponent,JobComponent,BlogComponent],
    providers: [],
})
export class UIModule {}