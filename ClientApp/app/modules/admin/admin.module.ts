import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UIModule } from '../common/ui/ui.module';
import { adminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [adminRouter, CoreModule, UIModule,FormsModule,],
    exports: [],
    declarations: [
                AdminComponent,
                LoginComponent
                ],
    providers: [],
})
export class AdminModule { }
