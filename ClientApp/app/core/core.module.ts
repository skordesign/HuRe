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
import { FormsModule } from '@angular/forms';
import { UIModule } from '@ui/ui.module';
import { LoginComponent } from '@core/login/login.component';
import { SharedModule } from '@shared/shared.module';
@NgModule({
    imports: [CommonModule, FormsModule , RouterModule, SharedModule ],
    declarations: [NavComponent, SearchComponent, FooterComponent, AlertComponent,
        ConfirmDialogComponent,SlideComponent, LoadingComponent, LoginComponent],
    exports: [NavComponent, SearchComponent, FooterComponent, ConfirmDialogComponent, AlertComponent,SlideComponent,
    LoadingComponent, LoginComponent]
})
export class CoreModule {

}

