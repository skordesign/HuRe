import { Component, OnInit, HostListener } from '@angular/core';
import { NAV_MENU } from '../shared/_variables';
@Component({
    selector: 'hure-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    navMenu = NAV_MENU;
    isDown = false;
    ngOnInit(): void {
    }
    @HostListener('window:scroll', ['$event']) onMouseWheelChrome(event: any) {
        this.mouseWheelFunc(event);
    }
    changeNav(isDown: boolean) {
        this.isDown = isDown;
    }
    mouseWheelFunc(event: any) {
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 60) {
            this.changeNav(true);
        } else if (this.isDown && number < 10) {
            this.changeNav(false)
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}
