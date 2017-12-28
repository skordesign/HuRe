import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from "./slide/slide.component";
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UIModule } from '@ui/ui.module';
import { LoginComponent } from '@core/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { ConfirmDialogComponent } from '@core/confirmdialog/confirmDlg.component';
import { LoginBoxComponent } from '@core/loginbox/loginbox.component';
import { EventListComponent } from '@app/end-user/event/eventlist/eventlist.component';
@NgModule({
    imports: [CommonModule,FormsModule, ReactiveFormsModule , RouterModule, SharedModule],
    declarations: [NavComponent, SearchComponent, FooterComponent, AlertComponent,
        SlideComponent, LoadingComponent, LoginComponent, ConfirmDialogComponent,LoginBoxComponent,EventListComponent],
    exports: [NavComponent, SearchComponent, FooterComponent, AlertComponent,SlideComponent,
    LoadingComponent, LoginComponent, ConfirmDialogComponent,LoginBoxComponent,EventListComponent]
})
export class CoreModule {

}

