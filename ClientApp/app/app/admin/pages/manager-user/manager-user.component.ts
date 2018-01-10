import { Component, OnInit, ViewChild } from "@angular/core";
import { ManagerUserService } from "@app/admin/service/manager-user.service";
import { CreateUserComponent } from "@app/admin/pages/manager-user/create-user/create-user.component";
import { ActivateUserComponent } from "@app/admin/pages/manager-user/activate-user/activate-user.component";
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
    @ViewChild(CreateUserComponent) _modalCreateUser: CreateUserComponent;
    @ViewChild(ActivateUserComponent) _modalActivate: ActivateUserComponent;
    constructor(private _serviceManagerUser: ManagerUserService) {

    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._data = undefined;
        this._serviceManagerUser.getAccountsPage(this.currentPage, this.numberItemPage).then(data => {
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
}