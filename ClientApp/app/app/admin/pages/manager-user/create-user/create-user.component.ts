import { Component, ViewChild, TemplateRef, ViewChildren } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '@app/admin/shared/components/date-picker/date-picker.component';
@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
    closeResult: string;
    @ViewChild('content') content: TemplateRef<any>;
    @ViewChildren('brithday') private birthday: DatePickerComponent;
    constructor(private modalService: NgbModal) { }
    open() {
        this.modalService.open(this.content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    timeChange(time: any) {
        console.log(time);

    }
    sexChange(sex: boolean) {
        console.log(sex);
    }
    save() {
        // console.log(this.birthday.model);ss
        console.log(this.birthday.getTime());

    }
}
