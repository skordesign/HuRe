import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmService } from './frontend/confirm.service';
import { AlertService } from './frontend/alert.service';
import { ProgressService } from './frontend/progress.service';
import { LoadingService } from './frontend/loading.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonHttpService } from './backend/common-http.service';
import { AuthService } from "@services/backend/auth.service";

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [ConfirmService, AlertService, ProgressService, LoadingService, CommonHttpService,AuthService],
})
export class ServiceModule {}