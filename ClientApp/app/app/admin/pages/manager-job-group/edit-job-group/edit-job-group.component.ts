import { Component, ViewChild, TemplateRef, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ManagerUserService } from '@app/admin/service/manager-user.service';
import * as moment from 'moment';
import { Variables, Type_Alert } from "@app/admin/shared/variables";
@Component({
    selector: 'edit-job-group',
    templateUrl: './edit-job-group.component.html',
    styleUrls: ['./edit-job-group.component.scss']
})
export class EditJobGroupComponent implements OnInit {
    ngOnInit(): void {

    }
    closeResult: string;
    //save list role
    roles: any;
    //save list company;
    companies: any;
    //value role
    birthday: string;
    modalRef: any;
    userModel: any;
    //show dropdown company
    private isShowCompany: boolean = false;
    //luu loi
    private error = {
        mess: '',
        type: ''
    }
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    @ViewChild('edit') content: TemplateRef<any>;
    constructor(
        private modalService: NgbModal,
        private userService: ManagerUserService
    ) { }
    open(guid: string) {
        this.getInfoUser(guid).then(result => {
            this.userModel = result;
            this.userModel.dateOfBirth = moment(this.userModel.dateOfBirth).format("YYYY/MM/DD");
            this.getAllRole();
            if (this.userModel.roleId == Variables.ID_ROLE_DOANH_NGHIEP) {
                this.getAllCompany();
                this.isShowCompany = true;
            }
            this.modalRef = this.modalService.open(this.content);
        })
    }
    timeChange(time: any) {
        this.userModel.dateOfBirth = time;
    }
    save() {
        this.userService.updateUser(this.userModel).then(result => {
            if (result == true) {
                this.showToast('Cập nhật thành công', Type_Alert.SUCCESS, true)
            } else {
                this.showToast('Cập nhật không thành công', Type_Alert.DANGER, false)
            }
        })
    }
    getInfoUser(guid: string) {
        return this.userService.getUser(guid).then(result => {
            return result
        })
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
    reset() {
        this.isShowCompany = false;
    }
    close() {
        this.reset();
        this.submitData.emit();;
        this.modalRef.close();
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
}
