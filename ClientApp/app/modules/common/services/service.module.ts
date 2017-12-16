import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from './frontend/confirm.service';
import { AlertService } from './frontend/alert.service';
import { ProgressService } from './frontend/progress.service';
import { LoadingService } from './frontend/loading.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [ConfirmService, AlertService, ProgressService, LoadingService],
})
export class ServiceModule {}