import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { JobService } from '@services/backend/job.service';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: ActivatedRoute, private jobSvc: JobService) { }
  jobs$: Observable<Job[]>
  limit = 10
  params: {
    keyword: string | null, jobGroupId: number , workTypeId?:number
  }
  ngOnInit() {
    this.jobs$ = this.router.paramMap
      .switchMap((params: ParamMap) => {
        this.params = { keyword: params.get('keyword')!, jobGroupId: +params.get('jobType')! }
        return this.jobSvc.getSearchJobs(this.params.keyword!,this.params.jobGroupId! ).pipe(share());
      })
  }

}