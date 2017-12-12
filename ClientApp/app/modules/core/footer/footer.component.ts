import { Component } from '@angular/core';
import { ConfirmService } from '../../common/services/frontend/confirm.service';
@Component({
    selector: 'hure-footer',
    templateUrl:'./footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent{
    /**
     *
     */
    constructor(private svc:ConfirmService) {
        
    }
 }

