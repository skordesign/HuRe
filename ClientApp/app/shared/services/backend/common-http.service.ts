import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from '../frontend/loading.service';
import { AlertService } from '../frontend/alert.service';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class CommonHttpService<T> {
    constructor(protected httpClient: HttpClient, protected loadingSvc: LoadingService, protected alertSvc: AlertService) { }
    get<T>(url: string): Observable<T> {
        try {
            this.loadingSvc.showLoading(true);
            return this.httpClient.get<T>(url);
        } catch (err) {
            return new Observable<T>(sub => sub.next());
        }
    }
    post(url: string, body: any, headers?: HttpHeaders) {
        return this.httpClient.post(url, JSON.stringify(body), { headers });
    }
    put(url: string, body: any) {
        return this.httpClient.put(url, JSON.stringify(body));
    }
    delete(url: string) {
        return this.httpClient.delete(url);
    }
}