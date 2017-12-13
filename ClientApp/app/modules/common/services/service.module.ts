import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from './frontend/confirm.service';
import { AlertService } from './frontend/alert.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [ConfirmService, AlertService],
})
export class ServiceModule {}