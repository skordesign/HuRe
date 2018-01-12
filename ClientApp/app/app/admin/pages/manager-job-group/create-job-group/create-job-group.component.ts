import { Component, ViewChild, TemplateRef, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ManagerUserService } from '@app/admin/service/manager-user.service';
import { AdminAlertComponent } from '@app/admin/shared/components/alert/alert.component';
import { Variables } from "@app/admin/shared/variables";
@Component({
    selector: 'create-job-group',
    templateUrl: './create-job-group.component.html',
    styleUrls: ['./create-job-group.component.scss']
})
export class CreateJobGroupComponent implements OnInit {
    ngOnInit(): void {
        this.getAllRole();
        this.getAllCompany();
    }
    closeResult: string;
    //save list role
    roles: any;
    //save list company;
    companies: any;
    //value role
    roleSelected: number;
    //value company
    companySelected: number;
    birthday: string;
    sex: boolean;
    isActivated: boolean;
    modalRef: any;
    //luu loi
    private error = {
        mess: '',
        type: ''
    }
    //show dropdown company
    private isShowCompany: boolean = false;
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    @ViewChild('content') content: TemplateRef<any>;
    constructor(
        private modalService: NgbModal,
        private userService: ManagerUserService,
    ) {

    }
    open() {
        this.modalRef = this.modalService.open(this.content);
    }
    timeChange(time: any) {
        this.birthday = time;
    }
    sexChange(sex: boolean) {
        this.sex = sex;
    }
    statusChange(IsActivated: boolean) {
        this.isActivated = IsActivated;
    }
    roleChange(roleID: any) {
        this.roleSelected = roleID;
        if (this.roleSelected == Variables.ID_ROLE_DOANH_NGHIEP) {
            this.isShowCompany = true;
        } else {
            this.isShowCompany = false;
        }
    }
    companyChange(companyId: any) {
        this.companySelected = companyId;
    }
    getAllRole() {
        this.userService.getAllRole().then(result => {
            this.roles = result;
        })
    }
    getAllCompany() {
        this.userService.getAllCompany().then(result => {
            this.companies = result;
        })
    }
    create(form: any) {
        if (this.roleSelected == undefined) {
            this.showToast('Chưa chọn phân quyền', 'warning', false)
            return;
        }
        let body = {
            Email: form.value.Email,
            Firstname: form.value.Firstname,
            Lastname: form.value.Lastname,
            Username: form.value.Username,
            Sex: this.sex,
            DateOfBirth: this.birthday,
            RoleId: this.roleSelected,
            IsActivated: this.isActivated,
            CompanyId: this.companySelected
        }
        this.userService.createUser(body).then(result => {
            if (result == true) {
                this.showToast('Thành công', 'success', true)
                this.close();
            } else {
                this.showToast('Tài khoản đã tồn tại', 'danger', false)
            }
        })
    }
    showToast(mess: string, type: string, isClose: boolean) {
        this.error.mess = mess;
        this.error.type = type;
        setTimeout((time) => {
            this.error.mess = '';
            this.error.type = '';
            if (isClose) {
                this.close()
            }
            return null
        }, 1000)
    }
    close() {
        this.reset();
        this.submitData.emit();;
        this.modalRef.close();
    }
    reset() {
        this.error.mess = '';
        this.error.type = '';
        this.isShowCompany = false;
    }
}
