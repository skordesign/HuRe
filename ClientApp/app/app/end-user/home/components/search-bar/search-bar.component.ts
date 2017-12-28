import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobGroupService } from '@services/backend/job-group.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'hure-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
  data: any[]
  sub: Subscription
  constructor(private jobGSvc: JobGroupService, private router: Router) {
    this.sub = this.jobGSvc.getJobs().subscribe(data => {
      var arr: any[] = []
      if (data) {
        data.forEach(t => arr.push({ value: t.id, text: t.name, isSelected: false }))
      }
      this.data = arr;
    });
  }
  gotoSearchPage() {
    this.router.navigate(['/search'])
  }
  ngOnInit() {
  }

}
