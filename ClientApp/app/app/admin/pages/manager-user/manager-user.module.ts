import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerUserRoutingModule } from "@app/admin/pages/manager-user/manager-user-routing.module";
import { ManagerUserComponent } from "@app/admin/pages/manager-user/manager-user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CreateUserComponent } from "@app/admin/pages/manager-user/create-user/create-user.component";
import { ShareAdminModule } from "@app/admin/shared/components/share-admin.module";

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        ManagerUserRoutingModule,
        FormsModule,
        //add module dung chung
        ShareAdminModule
    ],
    declarations: [
        ManagerUserComponent,
        CreateUserComponent
    ]
})
export class ManagerUserModule { }