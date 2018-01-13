import { Component, OnInit, Input, ElementRef, ViewChild, Renderer, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'hure-popover',
    templateUrl: 'popover.component.html',
    styleUrls: ['./popover.component.scss'], animations: [
        trigger('menuChanged', [
            state('0', style({
                height: '0',
                opacity: 0,
            })),
            state('1', style({
                height: 'auto',
                opacity: 1,
            }))
        ])
    ]
})

export class PopoverComponent implements OnInit {
    state = false;
    enabled = false;
    @ViewChild('btn') btn: ElementRef;
    @ViewChild('popover') popover: ElementRef;
    constructor(private renderer: Renderer, private element: ElementRef, private renderer2: Renderer2) { }
    change() {
        if (!this.enabled) {
            let parenTop = this.element.nativeElement.offsetTop;
            let parentLeft = this.element.nativeElement.offsetLeft || window.innerWidth - this.element.nativeElement.offsetRight - this.element.nativeElement.offsetWidth;
            let parentHeight = this.element.nativeElement.offsetHeight;
            let parentWidth = this.element.nativeElement.offsetWidth;
            let parentRight = this.element.nativeElement.offsetRight || window.innerWidth - this.element.nativeElement.offsetLeft - this.element.nativeElement.offsetWidth;
            let popoverWidth = this.popover.nativeElement.offsetWidth;
            this.renderer.setElementStyle(this.popover.nativeElement, 'top', parentHeight + 'px');
            this.renderer.setElementStyle(this.popover.nativeElement, 'left', '0');
            let sizeOutRight = parentLeft + popoverWidth / 2 - window.innerWidth;
            let sizeOutLeft = parentRight + popoverWidth / 2 - window.innerWidth;
            if (sizeOutLeft > 0) {
                let valToTransform = sizeOutLeft + 8;
                this.renderer.setElementStyle(this.popover.nativeElement, 'transform', 'translateX(' + (-popoverWidth / 2 + valToTransform)+ 'px)');
            } else if (sizeOutRight > 0) {
                let valToTransform = sizeOutRight + 8;
                
                this.renderer.setElementStyle(this.popover.nativeElement, 'transform', 'translateX(' + (popoverWidth / 2 - valToTransform )+ 'px)');
            }
            this.state = !this.state;
            setTimeout(() => {
            this.enabled = true
            }, 100);
        } else {
            this.closeIt()
        }
    }
    closeIt() {
        if (this.enabled) {
            this.renderer.setElementStyle(this.popover.nativeElement, 'top', -10000 + 'px');
            this.state = false;
            this.enabled = false;
            return;
        } else {
            return;
        }
    }
    ngOnInit() { }
}