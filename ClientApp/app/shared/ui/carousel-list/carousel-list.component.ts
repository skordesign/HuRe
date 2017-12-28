import { Component, OnInit, Input, ElementRef, Renderer, ViewChild, AfterViewInit, AfterViewChecked, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
    selector: 'hure-carousel-list',
    templateUrl: 'carousel-list.component.html',
    styleUrls: ['./carousel-list.component.scss'],
    animations: [
        trigger('itemDis', [
            transition('void => *', [style({
                opacity: '1'
            }), animate(500)]),
            transition('* => void', [style({
                opacity: '0'
            }), animate(500)])
        ])
    ]
})

export class CarouselListComponent implements OnInit {
    ngAfterViewChecked(): void {
    }
    @Input() listItem: CarouselItem[]
    @Input() show: number = 4;
    @Input() size: number = 136;
    @ViewChild('carousel') carousel: ElementRef;
    public static server: string;
    constructor(private el: ElementRef, private render: Renderer, @Inject(PLATFORM_ID) platformId: object, private render2: Renderer2) {
        if (isPlatformBrowser(platformId)) {
            setTimeout(() => this.slide(), 3000);
        }
    }
    ngOnInit() {
    }
    slide() {
        let currentLeft = this.carousel.nativeElement.offsetLeft;
        //this.render.setElementStyle(this.carousel.nativeElement, 'left', (currentLeft - this.size - 64) + 'px');
        let first = this.carousel.nativeElement.querySelector('li');
        this.render2.appendChild(this.carousel.nativeElement, first);
        setTimeout(() => this.slide(), 3000)
    }
}

interface CarouselItem {
    img: string;
    text: string
    url: string;
}