import { Component, ViewChild, TemplateRef, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ManagerUserService } from '@app/admin/service/manager-user.service';
@Component({
    selector: 'create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    ngOnInit(): void {
        this.getAllRole();
    }
    closeResult: string;
    //save list role
    roles: any;
    //value role
    roleSelected: number;
    birthday: string;
    sex: boolean;
    modalRef: any;
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    @ViewChild('content') content: TemplateRef<any>;
    constructor(
        private modalService: NgbModal,
        private userService: ManagerUserService
    ) { }
    open() {
        this.modalRef = this.modalService.open(this.content);
        // this.modalService.open(this.content).result.then((result) => {
        //     this.closeResult = `Closed with: ${result}`;
        // }, (reason) => {
        //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        // });
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
        this.birthday = time;
    }
    sexChange(sex: boolean) {
        this.sex = sex;
    }
    roleChange(roleID: any) {
        this.roleSelected = roleID;
    }
    save() {

    }
    getAllRole() {
        this.userService.getAllRole().then(result => {
            this.roles = result;
        })
    }
    create(form: any) {
        let body = {
            Email: form.value.Email,
            Firstname: form.value.Firstname,
            Lastname: form.value.Lastname,
            Username: form.value.Username,
            Sex: this.sex,
            DateOfBirth: this.birthday,
            RoleId: this.roleSelected
        }
        this.userService.createUser(body).then(result => {
            if (result) {
                this.modalRef.close();
            }
        })
    }
}
