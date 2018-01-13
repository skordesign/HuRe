import { Component, OnInit, ViewChild } from "@angular/core";
import { Body } from "@angular/http/src/body";
import { AdminDialogComponent } from "@app/admin/shared/components/dialog/dialog.component";
import { AdminDialogService } from "@app/admin/service/front-end/dialog.service";
import { CreateWorkTypeComponent } from "@app/admin/pages/manager-work-type/create-work-type/create-work-type.component";
import { EditWorkTypeComponent } from "@app/admin/pages/manager-work-type/edit-work-type/edit-work-type.component";
import { ManagerWorkTypeService } from "@app/admin/service/manager-work-type.service";
@Component({
    selector: 'manager-work-type',
    templateUrl: './manager-work-type.component.html',
    styleUrls: ['./manager-work-type.component.scss']
})
export class ManagerWorkTypeComponent implements OnInit {
    private currentPage: number = 1;
    private totalItem: number;
    private numberItemPage: number = 5;
    private numberPageView: number = 5;
    private _data: any;
    private keySearch: string;
    //save list role
    private roles: any;
    @ViewChild(CreateWorkTypeComponent) _modalCreate: CreateWorkTypeComponent;
    @ViewChild(EditWorkTypeComponent) _modalEdit: EditWorkTypeComponent;
    constructor(
        private _service: ManagerWorkTypeService,
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
        this._service.getWorkTypePage(body).then(data => {
            console.log(data.data);
            this._data = data.data;
            this.totalItem = data.total;
        })
    }
    pageChange() {
        this.getData();
    }
    openCreateUser() {
        this._modalCreate.open();
    }
    openEdit(id: number) {
        this._modalEdit.open(id);
    }
    showConfirmDelete(id: number) {
        this._serviceDialog.show('Xác Nhận', 'Bạn có xóa nhóm nghề này',
            () => {
                this._service.deleteWorkType(id).then(result => {
                    this.getData();
                })
            }
        )
    }
}