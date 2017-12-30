import { CommonHttpService } from "@services/backend/common-http.service";
import { Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { URL_ADMIN } from "@app/admin/service/variables";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ManagerUserService {
    constructor(private http: CommonHttpService<Account>) { }
    getAccountsPage(currentPage: number, numberItemPage: number): Promise<any> {
        let body = {
            CurrentPage: currentPage,
            NumberItemPage: numberItemPage
        }
        return this.http.post(URL_ADMIN.GET_PAGE_ACCOUNT, body, this.http.createHeader()).toPromise();
    }
}
