import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'hure-search-page',
    templateUrl: 'search-page.component.html'
})

export class SearchPageComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute,
        private router: Router) { }
    sub: any;
    keyword: string;
    ngOnInit() {
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.keyword = params['keyword'] || "";
                this.fetchData(this.keyword);
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    fetchData(keyword: string) {
        // do stuff
        console.log(keyword);
    }
}