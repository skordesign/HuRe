import { Component, OnInit, HostListener } from '@angular/core';
import { NAV_MENU } from '@shared/_variables';
@Component({
    selector: 'hure-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    navMenu = NAV_MENU;
    ngOnInit(): void {
    }
   
}
