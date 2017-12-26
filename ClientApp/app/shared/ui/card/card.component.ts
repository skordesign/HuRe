import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

export class CardComponent implements OnInit {
    ngOnInit(): void {
        console.log(this.event);

    }
    constructor(private router: Router) { }
    @Input() event: EventItem; 
    apply() {
        if (this.event) {
            this.router.navigate(['events', this.event ? this.event.id.toString() : 1]);
        }
    }
}