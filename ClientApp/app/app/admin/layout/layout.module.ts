import { NgModule } from "@angular/core";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderAdminComponent } from "@app/admin/layout/header/header.component";
import { AdminSidebarComponent } from "@app/admin/layout/sidebar/sidebar.component";

@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        RouterModule,
        CommonModule,
        NgbDropdownModule.forRoot()
    ],
    exports: [
        HeaderAdminComponent,
        AdminSidebarComponent
    ],
    declarations: [
        HeaderAdminComponent,
        AdminSidebarComponent
    ]
})
export class LayoutModule { }