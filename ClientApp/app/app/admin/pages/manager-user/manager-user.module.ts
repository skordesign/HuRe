import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerUserRoutingModule } from "@app/admin/pages/manager-user/manager-user-routing.module";
import { ManagerUserComponent } from "@app/admin/pages/manager-user/manager-user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        ManagerUserRoutingModule
    ],
    declarations: [
        ManagerUserComponent
    ]
})
export class ManagerUserModule { }