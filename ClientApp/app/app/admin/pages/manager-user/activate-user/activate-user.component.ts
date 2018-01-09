import { Component, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ManagerUserService } from '@app/admin/service/manager-user.service';
@Component({
    selector: 'admin-activate-user',
    templateUrl: './activate-user.component.html',
    styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent {
    closeResult: string;
    id: number;
    currentStatus: boolean;
    modalRef: any;
    constructor(
        private modalService: NgbModal,
        private userService: ManagerUserService
    ) { }
    @ViewChild('content') content: TemplateRef<any>;
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    open(id: number, currentStatus: boolean) {
        this.id = id;
        this.currentStatus = currentStatus;
        this.modalRef = this.modalService.open(this.content);
        // this.modalService.open(this.content).result.then((result) => {
        //     console.log(result);
        //     this.closeResult = `Closed with: ${result}`;
        // }, (reason) => {
        //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        // });
    }
    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return `with: ${reason}`;
    //     }
    // }
    save() {
        let body = {
            isActivated: !this.currentStatus
        }
        this.userService.activateUser(this.id, body).then(result => {
            if (result) {
                this.modalRef.close();
                this.submitData.emit();
            }
        })
    }
}
