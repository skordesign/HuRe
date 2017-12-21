import { Component, OnInit } from '@angular/core';
import { AuthService } from "@services/backend/auth.service";
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
<<<<<<< HEAD
export class LoginAdminComponent implements OnInit {
    ngOnInit(): void {
        
=======
export class LoginComponent implements OnInit {
    constructor(private _auth: AuthService) {

>>>>>>> 4b2aa8c2a4c252b08ce34a254adac09eb82d730f
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