import { Component, OnInit, ViewChild } from "@angular/core";
import { Body } from "@angular/http/src/body";
import { AdminDialogComponent } from "@app/admin/shared/components/dialog/dialog.component";
import { AdminDialogService } from "@app/admin/service/front-end/dialog.service";
import { ManagerJobGroupService } from "@app/admin/service/manager-job-group.service";
import { CreateJobGroupComponent } from "@app/admin/pages/manager-job-group/create-job-group/create-job-group.component";
import { EditJobGroupComponent } from "@app/admin/pages/manager-job-group/edit-job-group/edit-job-group.component";
@Component({
    selector: 'manager-job-group',
    templateUrl: './manager-job-group.component.html',
    styleUrls: ['./manager-job-group.component.scss']
})
export class ManagerJobGroupComponent implements OnInit {
    private currentPage: number = 1;
    private totalItem: number;
    private numberItemPage: number = 5;
    private numberPageView: number = 5;
    private _data: any;
    private keySearch: string;
    //save list role
    private roles: any;
    @ViewChild(CreateJobGroupComponent) _modalCreateJobGroup: CreateJobGroupComponent;
    @ViewChild(EditJobGroupComponent) _modalEditJobGroup: EditJobGroupComponent;
    constructor(
        private _service: ManagerJobGroupService,
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
        this._service.getJobGroupPage(body).then(data => {
            this._data = data.data;
            this.totalItem = data.total;
        })
    }
    pageChange() {
        this.getData();
    }
    openCreateUser() {
        this._modalCreateJobGroup.open();
    }
    openEdit(id: number) {
        this._modalEditJobGroup.open(id);
    }
    showConfirmDelete(id: number) {
        this._serviceDialog.show('Xác Nhận', 'Bạn có xóa nhóm nghề này',
            () => {
                this._service.deleteJobGroup(id).then(result => {
                    this.getData();
                })
            }
        )
    }
}