import { Component, OnInit } from "@angular/core";
import { ManagerUserService } from "@app/admin/service/manager-user.service";
@Component({
    selector: 'manager-user',
    templateUrl: './manager-user.component.html',
    styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {
    private currentPage: number = 1;
    private numberItemPage: number = 1;
    private numberPageView: number = 5
    constructor(private _serviceManagerUser: ManagerUserService) {

    }
    ngOnInit() {

    }
    getData() {
        this._serviceManagerUser.getAccountsPage(1, 1).subscribe(data => {
            console.log(data);
        })
    }
}