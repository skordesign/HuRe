import { CommonHttpService } from "@services/backend/common-http.service";
import { Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { URL_ADMIN } from "@app/admin/service/variables";
import { Observable } from "rxjs/Observable";
@Injectable()
export class ManagerJobGroupService {
    constructor(private http: CommonHttpService<JobGroup>) { }
    getJobGroupPage(body: any): Promise<any> {
        return this.http.post(URL_ADMIN.GET_PAGE_JOB_GROUP, body, this.http.createHeader()).toPromise();
    }
    createJobGroup(body: any) {
        return this.http.post(URL_ADMIN.CREATE_USER, body, this.http.createHeader()).toPromise();
    }
    updateJobGroup(body: any) {
        return this.http.post(URL_ADMIN.UPDATE_USER, body, this.http.createHeader()).toPromise();
    }
    deleteJobGroup(guid: string) {
        return this.http.delete(URL_ADMIN.DETELE_USER, guid, this.http.createHeader()).toPromise();
    }
}
