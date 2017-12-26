import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmService } from './frontend/confirm.service';
import { AlertService } from './frontend/alert.service';
import { ProgressService } from './frontend/progress.service';
import { LoadingService } from './frontend/loading.service';
import { CommonHttpService } from './backend/common-http.service';
import { AuthService } from "@services/backend/auth.service";
import { CoreModule } from '@core/core.module';
import { JobService } from '@services/backend/job.service';
import { HttpModule } from '@angular/http';
import { EventService } from '@services/backend/event.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpModule ],
    exports: [],
    providers: [ConfirmService, AlertService, ProgressService, LoadingService, CommonHttpService,AuthService,
    JobService, EventService],
})
export class ServiceModule {}