import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from "./slide/slide.component";
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UIModule } from '@ui/ui.module';
import { LoginComponent } from '@core/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { ConfirmDialogComponent } from '@core/confirmdialog/confirmDlg.component';
import { LoginBoxComponent } from '@core/loginbox/loginbox.component';
import { EventListComponent } from '@core/eventlist/eventlist.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchBarComponent } from '@app/end-user/home/components/search-bar/search-bar.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule,NgxPaginationModule],
    declarations: [NavComponent, SearchComponent, FooterComponent, AlertComponent,
        SlideComponent, LoadingComponent, LoginComponent, ConfirmDialogComponent, LoginBoxComponent, EventListComponent
        ,SearchBarComponent,
        SignUpComponent
    ],
    exports: [NavComponent, SearchComponent, FooterComponent, AlertComponent, SlideComponent, SignUpComponent,
        LoadingComponent, LoginComponent, ConfirmDialogComponent, LoginBoxComponent, EventListComponent,SearchBarComponent]
})
export class CoreModule {

}

