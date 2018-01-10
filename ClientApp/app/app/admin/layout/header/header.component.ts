import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from "@services/backend/auth.service";

@Component({
    selector: 'admin-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderAdminComponent implements OnInit {
    toggleClass: string = 'sidenav-toggled';
    constructor(public router: Router, private _auth: AuthService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() { }

    isToggled(): boolean {
        const dom: any = document.querySelector('body');
        return dom.classList.contains(this.toggleClass);
    }
    toggleSidebar() {
        //thu nho nav
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.toggleClass);
        //dong cac menu con
        const dom1: any = document.querySelector('.navbar-sidenav .nav-link-collapse');
        dom1.classList.add("collapsed");
        const dom2: any = document.querySelector('.navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level');
        dom2.classList.remove("show");
    }
    logout() {
        this._auth.logout();
        this.router.navigate(['/admin/login'])
    }
    expand() {
        const dom: any = document.querySelector('body');
        dom.classList.remove(this.toggleClass);
    }
}
