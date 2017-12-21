import { NgModule } from '@angular/core';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
<<<<<<< HEAD
import { LoginAdminComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
=======
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
>>>>>>> 4b2aa8c2a4c252b08ce34a254adac09eb82d730f
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
<<<<<<< HEAD
                AdminComponent,
                LoginAdminComponent
                ],
    providers: [],
=======
        AdminComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers: [AdminGuard],
>>>>>>> 4b2aa8c2a4c252b08ce34a254adac09eb82d730f
})
export class AdminModule { }
