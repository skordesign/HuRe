import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from '../../common/services/frontend/alert.service';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'hure-alert',
    templateUrl: './alert.component.html',
    styles: [``],
    animations: [
        trigger('alertShowChanged', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(250, style({ opacity: '*' }))
            ]),
            transition('* => void', [
                style({ opacity: '*' }),
                animate(250, style({ opacity: 0 }))
            ]),

        ])
    ]
})
export class AlertComponent implements OnInit, OnDestroy {
    subcription: Subscription;
    isActivated: boolean;
    alertList: Alert[] = [];
    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.subcription = this.alertService.alertChanged.subscribe((body: any) => {
            let alert = body as Alert;
            this.alertList.push(alert);
            this.isActivated = true;
            this.showAlert(alert);
        })
    }
    private showAlert(alert: Alert) {
        if (this.alertList.length === 0) {
            this.isActivated = false;
            return;
        }
        setTimeout(() => {
            this.alertList.shift();
            this.showAlert(this.alertList[0])
        }, 1000);
    }
}

interface Alert {
    message: string;
    action: () => void;
    type: string;
}
