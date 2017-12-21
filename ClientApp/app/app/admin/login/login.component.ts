import { Component, OnInit } from '@angular/core';
import { AuthService } from "@services/backend/auth.service";
@Component({
    selector: 'admin-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private _auth: AuthService) {
    }
    ngOnInit(): void {

    }
    signIn(form: any) {
        console.log(form.value);
        if (form.valid) {
            let loginModel = form.value;
            console.log(loginModel);
            this._auth.login(loginModel).then(result => {
                if (result) {
                    console.log('Thành công');
                    console.log(this._auth.isLogged());
                } else {
                    console.log('Thất bại');
                }
            })
        }
    }
}