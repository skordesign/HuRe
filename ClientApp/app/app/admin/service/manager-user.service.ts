import { CommonHttpService } from "@services/backend/common-http.service";
import { Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { URL_ADMIN } from "@app/admin/service/variables";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ManagerUserService {
    constructor(private http: CommonHttpService<Account>) { }
    private accounts$: Observable<Account[]>
    getAccountsPage(currentPage: number, numberItemPage: number): Observable<Account[]> {
        let body = {
            CurrentPage: currentPage,
            NumberItemPage: numberItemPage
        }
        if (!this.accounts$) {
            this.accounts$ = this.http.post(URL_ADMIN.GET_PAGE_ACCOUNT, body, this.http.createHeader()).share();
        }
        return this.accounts$
    }
}
