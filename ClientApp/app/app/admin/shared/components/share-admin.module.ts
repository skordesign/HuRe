import { NgModule } from "@angular/core";
import { DatePickerComponent } from "@app/admin/shared/components/date-picker/date-picker.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { SexSeletComponent } from "@app/admin/shared/components/sex-select/sex-select.component";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
    ],
    exports: [
        DatePickerComponent,
        SexSeletComponent
    ],
    declarations: [
        DatePickerComponent,
        SexSeletComponent
    ],
})
export class ShareAdminModule { }
