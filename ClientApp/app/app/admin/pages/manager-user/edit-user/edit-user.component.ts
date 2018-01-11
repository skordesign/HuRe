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
    roleSelected: number;
    birthday: string;
    sex: boolean;
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
