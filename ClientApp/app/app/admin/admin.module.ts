import { NgModule } from '@angular/core';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { LoginAdminComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '@core/core.module';
import { UIModule } from '@ui/ui.module';
import { HttpModule } from "@angular/http";
import { DashboardComponent } from "@app/admin/dashboard/dashboard.component";
import { AdminGuard } from "@guards/admin.guard";

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
                LoginAdminComponent
                ],
    providers: [AdminGuard],
})
export class AdminModule { }
