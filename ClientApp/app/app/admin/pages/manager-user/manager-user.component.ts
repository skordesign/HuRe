import { Component, OnInit } from "@angular/core";
import { ManagerUserService } from "@app/admin/service/manager-user.service";
@Component({
    selector: 'manager-user',
    templateUrl: './manager-user.component.html',
    styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {
    private currentPage: number = 1;
    private totalItem: number = 7;
    private numberItemPage: number = 1;
    private numberPageView: number = 5;
    private _data: any;
    constructor(private _serviceManagerUser: ManagerUserService) {

    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this._data = undefined;
        this._serviceManagerUser.getAccountsPage(this.currentPage, this.numberItemPage).then(data => {
            this._data = data.data;
            this.totalItem = data.total;
        })
    }
    pageChange() {
        this.getData();
    }
}