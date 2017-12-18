import { NgModule } from '@angular/core';

import { IntroduceComponent } from './introduce.component';
import { introRouter } from './introduce.router';

@NgModule({
    imports: [introRouter],
    exports: [],
    declarations: [IntroduceComponent],
    providers: [],
})
export class IntroduceModule { }
