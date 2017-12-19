import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'app-popover',
    templateUrl: 'popover.component.html',
    styleUrls: ['./popover.component.scss'], animations: [
        trigger('menuChanged', [
            state('0', style({
                height: '0',
                opacity: 0,
            })),
            state('1', style({
                height: 'auto',
                opacity: 1
            })),
            transition('1 => 0', [
                style({ height: '*' }),
                animate(100, style({ height: 0 }))
            ]), transition('0 => 1', [
                style({ height: 0 }),
                animate(100, style({ height: '*' }))
            ]),
        ])
    ]
})

export class PopoverComponent implements OnInit {
    @Input() header = "menu"
    state = false;
    top = 0;
    left = 0;

    constructor(private element: ElementRef) { }
    change() {
        let top = this.element.nativeElement.offsetTop;
        let left = this.element.nativeElement.offsetLeft;
        console.log(this.element.nativeElement.style.height);
        this.top = top + 50;
        this.left = left - 120;
        this.state = !this.state;
    }
    ngOnInit() { }
}