import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ConfirmService } from '@services/frontend/confirm.service';
import { AlertService } from '@services/frontend/alert.service';
import { CommonHttpService } from '@services/backend/common-http.service';
import { LoadingService } from '@services/frontend/loading.service';
@Component({
    selector: 'job',
    templateUrl: './job.component.html',
    styleUrls: []
})
export class JobComponent implements OnInit {
    constructor(private confirmSvc: ConfirmService, private alertSvc: AlertService, private http: CommonHttpService<any>,
        private loadingSvc: LoadingService) { }
    ngOnInit() {
        // this.http.get<any>("api/test").subscribe(data => {
        //     console.log(data)
        //     this.loadingSvc.showLoading(false);
        // })
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