import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { ConfirmService } from '../../common/services/frontend/confirm.service';



@Component({
    selector: 'hure-confirm-dlg',
    templateUrl: './confirmDlg.component.html',
    styleUrls:['./confirmDlg.component.css'], animations: [
        trigger('confirmDialogChanged', [
            state('active', style({opacity: '*'})),
            transition('void => *', [
              style({opacity: 0 }),
              animate(250, style({opacity: '*'}))
            ]),
            transition('* => void', [
              style({opacity: '*'}),
              animate(250, style({opacity: 0}))
            ]),
           
        ]),
        trigger('confirmDialogChangedOverlay', [
            state('active', style({opacity: '*'})),
            transition('void => *', [
              style({opacity:0 }),
              animate(250, style({opacity: '*'}))
            ]),
            transition('* => void', [
              style({opacity: '*'}),
              animate(250, style({opacity: 0}))
            ]),
           
        ])
    ]
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
    isActivated = false;
    action: any;
    subcription: Subscription;
    title = "";
    message = "";
    state = "inactive";
    constructor(private confirm: ConfirmService) { }

    ngOnInit() {

        this.subcription = this.confirm.confirmChanged.subscribe((body: any) => {
            this.action = body.action;
            this.title = body.title;
            this.message = body.message;
            this.showDialog();
        });
        if (this.state == "inactive") {
            setTimeout(() => this.state = "active")
        }
    }
    showDialog() {
        this.isActivated = true;
    }
    close() {
        this.action = null;
        this.isActivated = false;
    }
    ok() {
        this.action()
        this.close()
    }
}





