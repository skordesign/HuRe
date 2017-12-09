import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { DirectiveModule } from '../common/directives/directive.module';

@NgModule({
    imports: [DirectiveModule],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class CoreModule {

}

