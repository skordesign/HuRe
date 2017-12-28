import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
    selector: 'hure-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [
        trigger('searchChanged', [
            state('true', style({
                width: '100%',
                'display': 'block'
            })),
            state('false', style({
                width: 0,
                'display': 'none'
            })),
            transition('0 => 1', [
                style({ width: 0 }),
                animate(250, style({ width: '*' }))
            ]),
            transition('1 => 0', [
                style({ width: '*' }),
                animate(250, style({ width: 0 }))
            ])
        ]),
    ]
})
export class SearchComponent {
    /**
     *
     */
    constructor(private router: Router) {

    }
    isActivated = false;
    keyword = "";
    onSubmit() {
        if (this.keyword.trim() != "") {
            let keyword = this.keyword.trim();
            this.isActivated = false;
            this.keyword = "";
            this.gotoSearchPage(keyword);
        }
    }
    gotoSearchPage(keyword: string) {
        this.router.navigate(['search'], { queryParams: { keyword: keyword } });
    }
}