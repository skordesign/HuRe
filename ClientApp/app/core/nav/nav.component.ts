import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { NAV_MENU } from '@shared/_variables';
import { AuthService } from '@services/backend/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Profile } from '@models/profile.model';
import { ProfileService } from '@services/backend/profile.service';
@Component({
    selector: 'hure-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
    isLogin = false;
    isSignUp = false;
    isFormShow = false;
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    closeLogin($event: boolean) {
        this.isFormShow = false;
    }
    showForm(isLogin: boolean = true, isSignUp: boolean = false) {
        this.isLogin = isLogin;
        this.isSignUp = isSignUp;
        this.isFormShow = true;
    }
    constructor(private authSvc: AuthService, private profileSvc: ProfileService) {
        this.sub = this.authSvc.login$.subscribe((login: boolean) => {
            this.checkLoggedIn()
        });
        this.sub.add(this.authSvc.loginRequest$.subscribe((login:boolean)=>{
            this.showForm()
        }))
    }
    sub: Subscription;
    navMenu = NAV_MENU;
    profile: Profile;
    isLoggedIn: boolean;
    ngOnInit(): void {
        if (typeof window != undefined) {
            this.checkLoggedIn();
        }
    }
    checkLoggedIn() {
        this.isLoggedIn = this.authSvc.isLogged();
        if (this.isLoggedIn) {
            this.profileSvc.getProfile().subscribe(profile => this.profile = profile);
        }
    }
    logout() {
        this.authSvc.logout();
        this.isLoggedIn = false;
    }
}
