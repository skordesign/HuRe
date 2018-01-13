import { Component, OnInit, ViewChild } from "@angular/core";
import { Body } from "@angular/http/src/body";
import { AdminDialogComponent } from "@app/admin/shared/components/dialog/dialog.component";
import { AdminDialogService } from "@app/admin/service/front-end/dialog.service";
import { CreateCompanyComponent } from "@app/admin/pages/manager-company/create-company/create-company.component";
import { EditCompanyComponent } from "@app/admin/pages/manager-company/edit-company/edit-company.component";
import { ManagerCompanyService } from "@app/admin/service/manager-company.service";
@Component({
    selector: 'manager-company',
    templateUrl: './manager-company.component.html',
    styleUrls: ['./manager-company.component.scss']
})
export class ManagerCompanyComponent implements OnInit {
    private currentPage: number = 1;
    private totalItem: number;
    private numberItemPage: number = 5;
    private numberPageView: number = 5;
    private _data: any;
    private keySearch: string;
    //save list role
    private roles: any;
    @ViewChild(CreateCompanyComponent) _modalCreateCompany: CreateCompanyComponent;
    @ViewChild(EditCompanyComponent) _modalEditCompany: EditCompanyComponent;
    constructor(
        private _service: ManagerCompanyService,
        private _serviceDialog: AdminDialogService
    ) { }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._data = undefined;
        let body = {};
        Object.assign(body, { NumberItemPage: this.numberItemPage });
        Object.assign(body, { CurrentPage: this.currentPage });
        if (this.keySearch) {
            Object.assign(body, { KeySearch: this.keySearch });
        }
        this._service.getCompanyPage(body).then(data => {
            console.log(data.data);
            this._data = data.data;
            this.totalItem = data.total;
        })
    }
    pageChange() {
        this.getData();
    }
    openCreateUser() {
        this._modalCreateCompany.open();
    }
    openEdit(id: number) {
        this._modalEditCompany.open(id);
    }
    showConfirmDelete(id: number) {
        this._serviceDialog.show('Xác Nhận', 'Bạn có xóa nhóm nghề này',
            () => {
                this._service.deleteCompany(id).then(result => {
                    this.getData();
                })
            }
        )
    }
}