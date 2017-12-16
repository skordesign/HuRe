import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { contactRouter } from './contact.router';

@NgModule({
    imports: [contactRouter],
    exports: [],
    declarations: [ContactComponent],
    providers: [],
})
export class ContactModule { }
