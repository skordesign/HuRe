import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hure-brand-container',
    templateUrl: 'brand-container.component.html',
    styleUrls: ['./brand-container.component.scss']
})

export class BrandContainerComponent implements OnInit {
    listBrand: any[] = [{
        img: "http://jobcareer.chimpgroup.com/careerbakery/wp-content/uploads/baker-partner2.png",
        url: "https://www.apple.com",
        text: "Apple"
    }, {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        url: "https://www.microsoft.com",
        text: "Microsoft"
    }, {
        img: "http://www.dts.com.vn/images/logo-dts.png",
        url: "http://www.dts.com.vn",
        text: "DTS"
    }, {
        img: "https://www.fpt-software.com/wp-content/uploads/sites/2/2017/11/FPT-Software-Ngang-2017.png",
        url: "https://career.fpt-software.com/vi/",
        text: "FPT Software"
    }, {
        img: "https://images.careerbuilder.vn/employer_folders/lot2/144332/144312logo-tma-hongtran.png",
        url: "http://www.tmasolutions.com/",
        text: "TMA"
    }
    ]
    constructor() { }

    ngOnInit() { }
}