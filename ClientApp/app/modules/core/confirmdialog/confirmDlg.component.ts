import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { ConfirmService } from '../../common/services/frontend/confirm.service';




@Component({
    selector: 'hure-confirm-dlg',
    templateUrl: './confirmDlg.component.html',
    styleUrls: ['./confirmDlg.component.scss'], animations: [
        trigger('confirmDialogChanged', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(250, style({ opacity: '*' }))
            ]),
            transition('* => void', [
                style({ opacity: '*' }),
                animate(250, style({ opacity: 0 }))
            ]),

        ]),
    ]
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
    isActivated = false;
    actions: Action[]
    subcription: Subscription;
    title = "";
    message = "";
    constructor(private confirm: ConfirmService) { }

    ngOnInit() {

        this.subcription = this.confirm.confirmChanged.subscribe((body: any) => {
            this.actions = body.actions;
            this.title = body.title;
            this.message = body.message;
            this.showDialog();
        });
    }
    showDialog() {
        this.isActivated = true;
    }
    exec(action: any) {
        let act = action as Action;
        act.func();
        this.isActivated = false;
    }
}

interface Action {
    func: () => void;
    text: string;
}