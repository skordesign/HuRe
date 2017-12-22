import{Component,Input} from '@angular/core';
@Component({
    selector:'hure-job',
    templateUrl:'./job.component.html',
    styleUrls:['./job.component.scss']
})
export class JobComponent{
    @Input() link: string  = "Fuckin" ;
    @Input() image: string = "Fuckin";
    @Input() linhvuc: string = "Fuckin";
    @Input() location: string = "Fuckin";
    @Input() job: string = "Fuckin";
    @Input() linkjobtype: string = "Fuckin";
    @Input() jobtype: string = "Fuckin";
}