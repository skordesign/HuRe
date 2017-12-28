import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@services/backend/auth.service';
import { LoadingService } from '@services/frontend/loading.service';

@Component({
    selector: 'hure-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(private fb: FormBuilder, private authSvc: AuthService, private loadingSvc: LoadingService) {
        this.createForm();
    }
    ngOnInit() { }
    createForm() {
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }
    async submit() {
        let loginModel = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        }
        try {
            this.loadingSvc.showLoading(true);
            await this.authSvc.login(loginModel);

        } finally {
            this.loadingSvc.showLoading(false);
        }
    }
}