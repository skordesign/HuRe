import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CommonHttpService } from '@services/backend/common-http.service';
import { Profile } from '@models/profile.model';
import { URL } from '@services/service.variables';
import { LocalService } from '@services/backend/local.service';

@Injectable()
export class ProfileService {
    private URL = URL.PROFILE_URL;
    constructor(private http: CommonHttpService<Profile>, private localSvc:LocalService) { }
    getProfile(): Observable<Profile> {
        let guid = this.localSvc.getGuid();
        return this.http.post(this.URL, guid, this.http.createHeader());
    }
}