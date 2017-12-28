import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@ui/action-menu/action-menu.component';

@Component({
    selector: 'hure-action-bar',
    templateUrl: 'action-bar.component.html',
    styleUrls: ['./action-bar.component.scss']
})

export class ActionBarComponent implements OnInit {
    actionItems: MenuItem[] = [{
        iconClass: "fa fa-file",
        text: "Tạo hồ sơ",
        action: () => { }
    }, {
        iconClass: "fa fa-clipboard",
        text: "Đăng bài",
        action: () => { }
    }, {
        iconClass: "fa fa-sign-in",
        text: "Đăng nhập",
        action: () => { }
    },
    {
        iconClass: "fa fa-user-plus",
        text: "Đăng kí",
        action: () => { }
    }]
    constructor() { }

    ngOnInit() { }
}