import { Component, OnInit, HostListener,OnDestroy } from '@angular/core';
import { NAV_MENU } from '@shared/_variables';
import { AuthService } from '@services/backend/auth.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'hure-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    constructor(private authSvc: AuthService) {
        this.sub = this.authSvc.login$.subscribe((login: boolean) => this.checkLoggedIn());
    }
    sub: Subscription;
    navMenu = NAV_MENU;
    username = "Đã đăng nhập"
    isLoggedIn: boolean;
    ngOnInit(): void {
        this.checkLoggedIn();
    }
    checkLoggedIn() {
        this.isLoggedIn = this.authSvc.isLogged();
        // if(this.isLoggedIn){
        //     this.authSvc.
        // }
    }
    logout() {
        this.authSvc.logout();
        this.isLoggedIn =false;
    }
}
