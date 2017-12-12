import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveModule } from '../common/directives/directive.module';
import { ConfirmDialogComponent } from './confirmdialog/confirmDlg.component';
import { ServiceModule } from '../common/services/service.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, DirectiveModule],
    declarations: [NavComponent, SearchComponent, FooterComponent,
        ConfirmDialogComponent],
    exports: [NavComponent, SearchComponent, FooterComponent, ConfirmDialogComponent]
})
export class CoreModule {

}

