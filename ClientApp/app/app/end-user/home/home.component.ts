import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ConfirmService } from '@services/frontend/confirm.service';
import { AlertService } from '@services/frontend/alert.service';
import { CommonHttpService } from '@services/backend/common-http.service';
import { LoadingService } from '@services/frontend/loading.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private test = [1, 2, 3, 4, 5, 6, 7, 8];
    constructor(private confirmSvc: ConfirmService, private alertSvc: AlertService, private http: CommonHttpService<any>,
        private loadingSvc: LoadingService) { }
    ngOnInit() {
    }

}