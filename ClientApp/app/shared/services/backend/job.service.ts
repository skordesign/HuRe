import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CommonHttpService } from '@services/backend/common-http.service';
import { LoadingService } from '@services/frontend/loading.service';
import { AlertService } from '@services/frontend/alert.service';

@Injectable()
export class JobService extends CommonHttpService<Job> {
    constructor(protected httpClient: HttpClient,
        protected loadingSvc: LoadingService,
        protected alertSvc: AlertService) { super(httpClient, loadingSvc, alertSvc); }

}