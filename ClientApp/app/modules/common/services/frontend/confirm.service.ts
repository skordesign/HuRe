import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ConfirmService {
    confirmChanged: EventEmitter<any> = new EventEmitter();
    public showConfirm = (action: () => void, title: string, message: string) =>
        this.confirmChanged.emit({ action: action, message: message, title: title });

}
