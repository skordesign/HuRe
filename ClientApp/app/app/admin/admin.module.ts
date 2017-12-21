import { NgModule } from '@angular/core';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { CoreModule } from '@core/core.module';
import { UIModule } from '@ui/ui.module';
import { HttpModule } from "@angular/http";
import { DashboardComponent } from "@app/admin/dashboard/dashboard.component";
import { AdminGuard } from "@guards/admin.guard";
import { LoginAdminComponent } from '@app/admin/login/login.component';
@NgModule({
    imports: [
        adminRouter,
        CoreModule,
        UIModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AdminComponent,
        LoginAdminComponent,
        DashboardComponent
    ],
    providers: [AdminGuard],
})
export class AdminModule { }
