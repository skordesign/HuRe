import { Component, OnInit, ViewChild } from "@angular/core";
import { ManagerUserService } from "@app/admin/service/manager-user.service";
import { CreateUserComponent } from "@app/admin/pages/manager-user/create-user/create-user.component";
import { ActivateUserComponent } from "@app/admin/pages/manager-user/activate-user/activate-user.component";
import { Body } from "@angular/http/src/body";
import { noUndefined } from "@angular/compiler/src/util";
import { EditUserComponent } from "@app/admin/pages/manager-user/edit-user/edit-user.component";
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
    @ViewChild(ActivateUserComponent) _modalActivate: ActivateUserComponent;
    @ViewChild(EditUserComponent) _modalEdit: EditUserComponent;
    constructor(
        private _serviceManagerUser: ManagerUserService) {
    }
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
        console.log(body);
        this._serviceManagerUser.getAccountsPage(body).then(data => {
            console.log(data);
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
    activate(id: number, currentStatus: boolean) {
        this._modalActivate.open(id, currentStatus)

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