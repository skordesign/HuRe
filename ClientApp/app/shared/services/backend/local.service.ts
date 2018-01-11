import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

    constructor() { }
    getGuid() {
        if (typeof window != "undefined") {
            return localStorage.getItem('userId');
        }
    }
    getAccountId(){
        if(typeof window != "undefined"){
            return localStorage.getItem('accountId')
        }
    }
}