import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveModule } from '../common/directives/directive.module';

@NgModule({
    imports: [DirectiveModule],
    declarations: [NavComponent,SearchComponent,FooterComponent],
    exports: [NavComponent,SearchComponent,FooterComponent]
})
export class CoreModule {

}

