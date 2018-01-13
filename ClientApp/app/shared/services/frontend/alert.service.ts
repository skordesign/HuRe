import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
    alertChanged: EventEmitter<any> = new EventEmitter();
    private showAlert = (title: string, message: string, action: () => void = () => { }, type: string) =>
        this.alertChanged.emit({ action: action, message: message, title: title, type: type });
    public show(title: string, message: string, action: () => void = () => { }, type: string = 'success') {
        this.showAlert(title, message, action, type);
    }
}