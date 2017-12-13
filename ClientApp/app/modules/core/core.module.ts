import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { IntroduceComponent} from './introduce/introduce.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveModule } from '../common/directives/directive.module';
import { SlideComponent } from "./slide/slide.component";

@NgModule({
    imports: [DirectiveModule],
    declarations: [NavComponent, SearchComponent, IntroduceComponent , FooterComponent, SlideComponent],
    exports: [NavComponent, SearchComponent,IntroduceComponent , FooterComponent, SlideComponent]
})
export class CoreModule {

}

