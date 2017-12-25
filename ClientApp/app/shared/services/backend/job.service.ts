import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CommonHttpService } from '@services/backend/common-http.service';
import { LoadingService } from '@services/frontend/loading.service';
import { AlertService } from '@services/frontend/alert.service';
import { URL } from '@services/service.variables';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobService {
    private readonly URL = URL.JOB_URL;
    constructor(private http: CommonHttpService<Job>) { }
    private getJobs$: Observable<Job[]>
    getJobs(): Observable<Job[]> {
        if (!this.getJobs$) {
            this.getJobs$ = this.http.gets<Job>(this.URL, this.http.createHeader()).share();
        }
        return this.getJobs$;
    }
}