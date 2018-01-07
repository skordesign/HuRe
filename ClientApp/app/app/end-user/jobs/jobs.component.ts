import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hure-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  isIntership: boolean = false
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('internship')
    if (param == 'internship') {
      this.isIntership = true;
    }
  }

}
