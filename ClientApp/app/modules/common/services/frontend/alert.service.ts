import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
    alertChanged: EventEmitter<any> = new EventEmitter();
    private showAlert = (title: string, message: string, action: () => void = () => { }) =>
        this.alertChanged.emit({ action: action, message: message, title: title });
    public show(title: string, message: string, action: () => void = () => { }) {
        this.showAlert(title, message, action);
    }
}