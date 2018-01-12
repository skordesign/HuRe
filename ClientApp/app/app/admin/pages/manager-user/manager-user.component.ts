import { Component, OnInit, ViewChild } from "@angular/core";
import { ManagerUserService } from "@app/admin/service/manager-user.service";
import { CreateUserComponent } from "@app/admin/pages/manager-user/create-user/create-user.component";
import { Body } from "@angular/http/src/body";
import { noUndefined } from "@angular/compiler/src/util";
import { EditUserComponent } from "@app/admin/pages/manager-user/edit-user/edit-user.component";
import { AdminDialogComponent } from "@app/admin/shared/components/dialog/dialog.component";
import { AdminDialogService } from "@app/admin/service/front-end/dialog.service";
@Component({
    selector: 'manager-user',
    templateUrl: './manager-user.component.html',
    styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {
    private currentPage: number = 1;
    private totalItem: number = 7;
    private numberItemPage: number = 5;
    private numberPageView: number = 5;
    private _data: any;
    private filterStatus: number = 0;
    private filterRoleAccount: number;
    private keySearch: string;
    //save list role
    private roles: any;
    @ViewChild(CreateUserComponent) _modalCreateUser: CreateUserComponent;
    @ViewChild(EditUserComponent) _modalEdit: EditUserComponent;
    constructor(
        private _serviceManagerUser: ManagerUserService,
        private _serviceDialog: AdminDialogService
    ) { }
    ngOnInit() {
        this.getAllRole();
        this.getData();
    }
    getData() {
        this._data = undefined;
        let body = {};
        Object.assign(body, { NumberItemPage: this.numberItemPage });
        Object.assign(body, { CurrentPage: this.currentPage });
        if (this.filterStatus != undefined) {
            Object.assign(body, { IsActivated: this.filterStatus });
        }
        if (this.filterRoleAccount) {
            Object.assign(body, { RoleId: this.filterRoleAccount });
        }
        if (this.keySearch) {
            Object.assign(body, { KeySearch: this.keySearch });
        }
        this._serviceManagerUser.getAccountsPage(body).then(data => {
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
    showConfirmActivate(guid: string, currentStatus: boolean) {
        this._serviceDialog.show('Xác Nhận', 'Bạn có muốn kích hoạt/hủy kích hoạt tài khoản này',
            () => {
                let body = {
                    isActivated: !currentStatus
                }
                this._serviceManagerUser.activateUser(guid, body).then(result => {
                    this.getData();
                })
            }
        )
    }
    showConfirmDelete(guid: string) {
        this._serviceDialog.show('Xác Nhận', 'Bạn có xóa tài khoản này',
            () => {
                this._serviceManagerUser.deleteUser(guid).then(result => {
                    console.log('xóa thành công');
                    this.getData();
                })
            }
        )
    }
    roleChange(idRole: any) {
        this.filterRoleAccount = idRole;
        this.getData();
    }
    getAllRole() {
        this._serviceManagerUser.getAllRole().then(result => {
            this.roles = result;
        })
    }
    openEdit(guid: string) {
        this._modalEdit.open(guid);
    }
}