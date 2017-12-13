import { Component } from '@angular/core';
import { ConfirmService } from '../../modules/common/services/frontend/confirm.service';
import { AlertService } from '../../modules/common/services/frontend/alert.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private confirmSvc: ConfirmService, private alertSvc:AlertService) { }


    public showDlg() {
        this.confirmSvc.showConfirm("Help", "Me", [{
            text: "OK", func: () => { console.log("OK") }
        }])
    }
    public showAlert(){
        this.alertSvc.showInfo("Hello");
        this.alertSvc.showError("Hello");
    }
}
