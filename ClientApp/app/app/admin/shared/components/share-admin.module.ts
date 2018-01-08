import { NgModule } from "@angular/core";
import { DatePickerComponent } from "@app/admin/shared/components/date-picker/date-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { SexSeletComponent } from "@app/admin/shared/components/sex-select/sex-select.component";
import { AdminDropdownComponent } from "@app/admin/shared/components/dropdown/dropdown.component";
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
        AdminDropdownComponent
    ],
    declarations: [
        DatePickerComponent,
        SexSeletComponent,
        AdminDropdownComponent
    ],
})
export class ShareAdminModule { }
