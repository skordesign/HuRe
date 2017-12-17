import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveModule } from '../common/directives/directive.module';
import { SlideComponent } from "./slide/slide.component";
import { ConfirmDialogComponent } from './confirmdialog/confirmDlg.component';
import { ServiceModule } from '../common/services/service.module';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [CommonModule, DirectiveModule, RouterModule],
    declarations: [NavComponent, SearchComponent, FooterComponent, AlertComponent,
        ConfirmDialogComponent,SlideComponent, LoadingComponent],
    exports: [NavComponent, SearchComponent, FooterComponent, ConfirmDialogComponent, AlertComponent,SlideComponent,
    LoadingComponent]
})
export class CoreModule {

}

