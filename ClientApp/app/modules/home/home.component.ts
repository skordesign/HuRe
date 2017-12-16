import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ConfirmService } from '../../modules/common/services/frontend/confirm.service';
import { AlertService } from '../../modules/common/services/frontend/alert.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private confirmSvc: ConfirmService, private alertSvc:AlertService) { }
    ngOnInit() {
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