import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hure-brand-container',
    templateUrl: 'brand-container.component.html',
    styleUrls: ['./brand-container.component.scss']
})

export class BrandContainerComponent implements OnInit {
    logos: any[] = [{
        url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        website: "https://www.apple.com"
    }, {
        url:"https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        website:"https://www.microsoft.com"
    },{
        url:"http://www.dts.com.vn/images/logo-dts.png",
        website:"http://www.dts.com.vn"
    },{
        url:"https://www.fpt-software.com/wp-content/uploads/sites/2/2017/11/FPT-Software-Ngang-2017.png",
        website:"https://career.fpt-software.com/vi/"
    },{
        url:"http://beetsoft.com.vn/wp-content/themes/beetsoft/images/blue-logo.png",
        website:"http://beetsoft.com.vn"
    },{
        url:"https://images.careerbuilder.vn/employer_folders/lot2/144332/144312logo-tma-hongtran.png",
        website:"http://www.tmasolutions.com/"
    }
    ]
    constructor() { }

    ngOnInit() { }
}