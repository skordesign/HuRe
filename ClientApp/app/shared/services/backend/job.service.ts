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
    private readonly OJOB_URL = URL.JOB_URL + '/only-jobs'
    private readonly OINTERN_URL = URL.JOB_URL + '/only-interns'
    constructor(private http: CommonHttpService<Job>) { }
    private getJobs$: Observable<Job[]>
    getJobDetail(id: number) {
        return this.http.get<Job>(this.URL, id, this.http.createHeader()).share()
    }
    getJobs(): Observable<Job[]> {
        if (!this.getJobs$) {
            this.getJobs$ = this.http.gets<Job>(this.URL, this.http.createHeader()).share();
        }
        return this.getJobs$;
    }
    getSearchJobs(keyword: string, jobGroupId: number = 0, workTypeId: number = 0) {
        if (!this.getJobs$) {
            this.getJobs()
        }
        return this.getJobs$.map(jobs => {
            let jobFilterKeyword = jobs.filter(job => {
                return job.contactAddress.toUpperCase().includes(keyword.toUpperCase()) || job.majorTag.toUpperCase().includes(keyword.toUpperCase())
                    || job.title.toUpperCase().includes(keyword.toUpperCase()) || job.shortDescription.toUpperCase().includes(keyword.toUpperCase())
                    || job.benefit.toUpperCase().includes(keyword.toUpperCase()) || job.place.toUpperCase().includes(keyword.toUpperCase())
                    || job.requirement.toUpperCase().includes(keyword.toUpperCase()) || job.position.toUpperCase().includes(keyword.toUpperCase())
                    || job.company.address.toUpperCase().includes(keyword.toUpperCase()) || job.company.description.toUpperCase().includes(keyword.toUpperCase())
                    || job.company.name.toUpperCase().includes(keyword.toUpperCase()) || job.company.shortName.toUpperCase().includes(keyword.toUpperCase())
                    || job.workType.name.toUpperCase().includes(keyword.toUpperCase()) || job.workType.shortName.toUpperCase().includes(keyword.toUpperCase())
                    || job.jobGroup.name.toUpperCase().includes(keyword.toUpperCase()) || job.jobGroup.shortName.toUpperCase().includes(keyword.toUpperCase())
            });
            if (jobGroupId != 0 && workTypeId != 0) {
                return jobFilterKeyword.filter(j => j.workTypeId == workTypeId && j.jobGroupId == jobGroupId)
            } else if (jobGroupId == 0 && workTypeId != 0) {
                return jobFilterKeyword.filter(j => j.workTypeId == workTypeId)
            } else if (jobGroupId != 0 && workTypeId == 0) {
                return jobFilterKeyword.filter(j => j.jobGroupId == jobGroupId)
            } else {
                return jobFilterKeyword;
            }
        })
    }
    getOnlyJobs() {
        return this.http.gets<Job>(this.OJOB_URL, this.http.createHeader()).share()
    }
    getOnlyInterns() {
        return this.http.gets<Job>(this.OINTERN_URL, this.http.createHeader()).share()
    }
}