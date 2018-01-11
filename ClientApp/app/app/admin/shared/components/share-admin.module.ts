import { NgModule } from "@angular/core";
import { DatePickerComponent } from "@app/admin/shared/components/date-picker/date-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { SexSeletComponent } from "@app/admin/shared/components/sex-select/sex-select.component";
import { AdminDropdownComponent } from "@app/admin/shared/components/dropdown/dropdown.component";
import { AdminAlertComponent } from "@app/admin/shared/components/alert/alert.component";
import { AdminSwitchButtonComponent } from "@app/admin/shared/components/switch-button/switch-button.component";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
    ],
    exports: [
        DatePickerComponent,
        SexSeletComponent,
        AdminDropdownComponent,
        AdminAlertComponent,
        AdminSwitchButtonComponent
    ],
    declarations: [
        DatePickerComponent,
        SexSeletComponent,
        AdminDropdownComponent,
        AdminAlertComponent,
        AdminSwitchButtonComponent
    ],
})
export class ShareAdminModule { }
