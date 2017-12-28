import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverEffect } from './hoverEffect.directive';

@NgModule({
    declarations: [HoverEffect],
    imports: [ CommonModule ],
    exports: [HoverEffect],
    providers: [],
})
export class DirectiveModule {}