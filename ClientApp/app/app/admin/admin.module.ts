import { NgModule } from '@angular/core';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from '@core/core.module';
import { UIModule } from '@ui/ui.module';
@NgModule({
    imports: [
    adminRouter,
    CoreModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule
    ],
    exports: [],
    declarations: [
                AdminComponent,
                LoginComponent
                ],
    providers: [],
})
export class AdminModule { }
