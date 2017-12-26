import { NgModule } from '@angular/core';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { CoreModule } from '@core/core.module';
import { UIModule } from '@ui/ui.module';
import { HttpModule } from "@angular/http";
import { AdminGuard } from "@guards/admin.guard";
import { LoginAdminComponent } from '@app/admin/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from "@app/admin/layout/layout.module";
import { HeaderAdminComponent } from "@app/admin/layout/header/header.component";
@NgModule({
    imports: [
        adminRouter,
        CoreModule,
        SharedModule,
        FormsModule,
        LayoutModule,
    ],
    exports: [],
    declarations: [
        AdminComponent,
        LoginAdminComponent
    ],
    providers: [AdminGuard],
})
export class AdminModule { }
