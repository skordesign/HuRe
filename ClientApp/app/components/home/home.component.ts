import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            console.log(values);
            this.apiValues = values.json() as string[];
            console.log(this.apiValues);
        });
    }
}