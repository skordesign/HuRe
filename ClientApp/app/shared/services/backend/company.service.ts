import { Injectable } from '@angular/core';
import { URL } from '@services/service.variables';
import { CommonHttpService } from '@services/backend/common-http.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CompanyService {
    private readonly URL = URL.COMPANY_URL;
    constructor(private http: CommonHttpService<Company>) { }
    getJobOfCompany(id:number){
        return this.http.gets<Job>(this.URL + `/${id}/jobs`, this.http.createHeader()).share();
    }
    getCompanies(){
        return this.http.gets<Company>(this.URL, this.http.createHeader()).share();
    }
}