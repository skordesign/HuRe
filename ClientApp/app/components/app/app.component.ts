import { Component } from '@angular/core';
import { ConfirmService } from '../../modules/common/services/frontend/confirm.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private confirmSvc: ConfirmService) { }


    public showDlg() {
        this.confirmSvc.showConfirm(() => console.log('Ok'), "Help", "Me")
    }
}
