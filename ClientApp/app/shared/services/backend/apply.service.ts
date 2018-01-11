import { Injectable } from '@angular/core';
import { URL } from '@services/service.variables';
import { CommonHttpService } from '@services/backend/common-http.service';

@Injectable()
export class ApplyService {
    private readonly URL = URL.APPLY_URL;
    constructor(private http: CommonHttpService<Apply>) { }
    postApply(model:any){
        return this.http.post(this.URL, model, this.http.createHeader());
    }
}