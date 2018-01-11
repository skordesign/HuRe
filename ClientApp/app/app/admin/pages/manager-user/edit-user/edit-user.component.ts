import { Component, ViewChild, TemplateRef, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ManagerUserService } from '@app/admin/service/manager-user.service';
@Component({
    selector: 'admin-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    ngOnInit(): void {

    }
    closeResult: string;
    //save list role
    roles: any;
    //value role
    birthday: string;
    modalRef: any;
    userModel: any;
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    @ViewChild('edit') content: TemplateRef<any>;
    constructor(
        private modalService: NgbModal,
        private userService: ManagerUserService
    ) { }
    open(guid: string) {
        this.getInfoUser(guid).then(result => {
            this.userModel = result;
            console.log(this.userModel.username);
            this.getAllRole();
            this.modalRef = this.modalService.open(this.content);
        })
    }
    timeChange(time: any) {
        //loi cho nay 2 kieu du lieu truoc sau khac nhau
        // this.userModel.dateOfBirth = new Date(time);
    }
    save() {
        console.log(this.userModel);
    }
    getAllRole() {
        this.userService.getAllRole().then(result => {
            this.roles = result;
        })
    }
    getInfoUser(guid: string) {
        return this.userService.getUser(guid).then(result => {
            console.log(result);
            return result
        })
    }
}
