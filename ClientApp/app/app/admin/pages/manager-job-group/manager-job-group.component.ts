import { Component, OnInit, ViewChild } from "@angular/core";
import { CreateUserComponent } from "@app/admin/pages/manager-user/create-user/create-user.component";
import { Body } from "@angular/http/src/body";
import { noUndefined } from "@angular/compiler/src/util";
import { EditUserComponent } from "@app/admin/pages/manager-user/edit-user/edit-user.component";
import { AdminDialogComponent } from "@app/admin/shared/components/dialog/dialog.component";
import { AdminDialogService } from "@app/admin/service/front-end/dialog.service";
import { ManagerJobGroupService } from "@app/admin/service/manager-job-group.service";
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
    @ViewChild(CreateUserComponent) _modalCreateUser: CreateUserComponent;
    @ViewChild(EditUserComponent) _modalEdit: EditUserComponent;
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
        this._modalCreateUser.open();
    }
    showConfirmDelete(guid: string) {
        // this._serviceDialog.show('Xác Nhận', 'Bạn có xóa tài khoản này',
        //     () => {
        //         this._service.deleteUser(guid).then(result => {
        //             console.log('xóa thành công');
        //             this.getData();
        //         })
        //     }
        // )
    }
    openEdit(guid: string) {
        this._modalEdit.open(guid);
    }
}