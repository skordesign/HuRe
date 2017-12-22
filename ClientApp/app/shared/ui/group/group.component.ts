import{Component,Input} from '@angular/core';
@Component({
    selector:'hure-group',
    templateUrl:'./group.component.html',
    styleUrls:['./group.component.scss']
})
export class GroupComponent{
    @Input() image: string;
    @Input() link: string;
    @Input() text: string;
}