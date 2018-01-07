import { Component, OnInit } from '@angular/core';
import { AuthService } from "@services/backend/auth.service";
import { Router } from "@angular/router";
import { AlertService } from "@services/frontend/alert.service";
@Component({
    selector: 'admin-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginAdminComponent implements OnInit {
    constructor(
        private _auth: AuthService,
        private router: Router,
        private alert: AlertService) {
    }
    ngOnInit(): void {

    }
    signIn(form: any) {
        if (form.valid) {
            let loginModel = form.value;
            this._auth.login(loginModel).then(result => {
                if (result) {
                    this.router.navigate(['/admin/dashboards'])
                } else {
                    this.alert.show('Cảnh báo', 'Tài khoản hoặc mật khẩu không đúng');
                }
            })
        }
    }
}