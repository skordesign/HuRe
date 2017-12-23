import { Component } from '@angular/core';
import { ConfirmService } from '@services/frontend/confirm.service';
import { AlertService } from '@services/frontend/alert.service';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private confirmSvc: ConfirmService, private alertSvc:AlertService) { }
}