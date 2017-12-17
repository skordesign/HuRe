import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ConfirmService } from '../../modules/common/services/frontend/confirm.service';
import { AlertService } from '../../modules/common/services/frontend/alert.service';
import { CommonHttpService } from '../common/services/backend/common-http.service';
import { LoadingService } from '../common/services/frontend/loading.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private confirmSvc: ConfirmService, private alertSvc: AlertService, private http: CommonHttpService<any>,
        private loadingSvc: LoadingService) { }
    ngOnInit() {
        this.http.get<any>("api/test").subscribe(data => {
            console.log(data)
            this.loadingSvc.showLoading(false);
        })
    }

    public showDlg() {
        this.confirmSvc.showConfirm("Help", "Me", [{
            text: "OK", func: () => { console.log("OK") }
        }])
    }
    public showAlert() {
        this.alertSvc.show("Hello", "What is your name?");
    }
}