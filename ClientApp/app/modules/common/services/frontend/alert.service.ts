import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
    alertChanged: EventEmitter<any> = new EventEmitter();
    private showAlert = (message: string, type: string, action: () => void = () => { }) =>
        this.alertChanged.emit({ action: action, message: message, type: type });
    public showInfo(message: string, action: () => void = () => { }) {
        this.showAlert(message, "alert-primary", action);
    }
    public showSuccess(message: string, action: () => void = () => { }) {
        this.showAlert(message, "alert-success", action);
    }
    public showError(message: string, action: () => void = () => { }) {
        this.showAlert(message, "alert-danger", action);
    }
}