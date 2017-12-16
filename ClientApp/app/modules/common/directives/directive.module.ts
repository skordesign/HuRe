import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverEffect } from './hoverEffect.directive';
import { ClickOutsideDirective } from './clickOutside.directive';

@NgModule({
    declarations: [HoverEffect, ClickOutsideDirective],
    imports: [ CommonModule ],
    exports: [HoverEffect, ClickOutsideDirective],
    providers: [],
})
export class DirectiveModule {}