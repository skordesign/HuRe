import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from "./slide/slide.component";
import { ConfirmDialogComponent } from './confirmdialog/confirmDlg.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '@directives/directive.module';
@NgModule({
    imports: [CommonModule, DirectiveModule, RouterModule],
    declarations: [NavComponent, SearchComponent, FooterComponent, AlertComponent,
        ConfirmDialogComponent,SlideComponent, LoadingComponent],
    exports: [NavComponent, SearchComponent, FooterComponent, ConfirmDialogComponent, AlertComponent,SlideComponent,
    LoadingComponent]
})
export class CoreModule {

}

