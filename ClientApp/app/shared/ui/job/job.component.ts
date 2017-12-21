import{Component,Input} from '@angular/core';
@Component({
    selector:'hure-job',
    templateUrl:'./job.component.html',
    styleUrls:['./job.component.scss']
})
export class JobComponent{
    @Input() link: string;
    @Input() image: string;
    @Input() post: string;
    @Input() location: string;
    @Input() job: string;
    @Input() linkjobtype: string;
    @Input() jobtype: string;
}