import { Component, ViewChild, TemplateRef, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminAlertComponent } from '@app/admin/shared/components/alert/alert.component';
import { Variables } from "@app/admin/shared/variables";
import { ManagerCompanyService } from '@app/admin/service/manager-company.service';
@Component({
    selector: 'create-company',
    templateUrl: './create-company.component.html',
    styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
    ngOnInit(): void {
    }
    closeResult: string;
    modalRef: any;
    private ImageURL: string;
    //luu loi
    private error = {
        mess: '',
        type: ''
    }
    @Output() submitData: EventEmitter<any> = new EventEmitter();
    @ViewChild('content') content: TemplateRef<any>;
    constructor(
        private modalService: NgbModal,
        private service: ManagerCompanyService,
    ) {
    }
    open() {
        this.modalRef = this.modalService.open(this.content);
    }
    create(form: any) {
        let body = {
            name: form.value.name,
            shortName: form.value.shortName,
            description: form.value.description,
            ImageURL :this.ImageURL
        }
        this.service.createCompany(body).then(result => {
            if (result == true) {
                this.showToast('Thành công', 'success', true)
            } else {
                this.showToast('Lỗi xảy ra', 'danger', false)
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
    }
}
