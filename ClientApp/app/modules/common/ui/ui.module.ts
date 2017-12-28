import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { ContentComponent } from './contact/content/content.component';
import { InputComponent } from './contact/input/input.component';
@NgModule({
    declarations: [ GroupComponent,ContentComponent,InputComponent],
    imports: [ CommonModule ],
    exports: [ GroupComponent,ContentComponent,InputComponent],
    providers: [],
})
export class UIModule {}