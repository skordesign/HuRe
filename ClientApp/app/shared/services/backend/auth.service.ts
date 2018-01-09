

import { Injectable, EventEmitter } from "@angular/core";
import { JwtHelper } from "angular2-jwt/angular2-jwt";
import { UrlVariable } from "@shared/_variables";
import { CommonHttpService } from "@services/backend/common-http.service";
import { Headers } from '@angular/http';
import { window } from "rxjs/operators/window";
import { AlertService } from "@services/frontend/alert.service";

@Injectable()
export class AuthService {
    login$: EventEmitter<boolean> = new EventEmitter();
    constructor(private httpClient: CommonHttpService<any>, private toaster: AlertService) { }
    createHeader(): Headers {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        // .set("Content-Type", "application/json");
        return headers;
    }
    async signUp(user: any, isCompany: boolean = false): Promise<boolean> {
        let body = {
            username: user.username,
            email: user.email,
            password: user.password,
            companyName: user.companyName,
            companyWebsite: user.companyWebsite,
            roleId:user.roleId
        }
        try {
            let result: any
            if (isCompany) {
                result = await this.httpClient.post("/api/sign-up/company", body, this.createHeader())
                    .toPromise()
            } else {
                result = await this.httpClient.post("/api/sign-up/student", body, this.createHeader())
                    .toPromise()
            }
            if (result==true) {

                this.toaster.show("Đăng kí thành công", "Đăng nhập để sử dụng.");
            } else {
                this.toaster.show("Đăng kí thất bại", "Vui lòng thử lại sau.");
            }
            return result;
        } catch (err) {
            return false;
        }
    }
    async login(user: any): Promise<boolean> {
        let body = {
            username: user.username,
            password: user.password
        }
        try {
            let token = await this.httpClient.post(UrlVariable.URL_LOGIN, body, this.createHeader()).toPromise();
            var tokenAuth = (token as TokenProvider);
            if (typeof window != "undefined") {
                localStorage.setItem('token_hure', tokenAuth.token);
                localStorage.setItem('userId', tokenAuth.guid.toString());
            }
            this.login$.emit(true);
            return true;
        } catch (err) {
            return false;
        }
    }
    private extractdata(res: Response) {
        let body = res.json();
        return body || {};
    }
    isLogged() {
        if (typeof window != "undefined") {
            if (localStorage) {
                var token = localStorage.getItem("token_hure");
                if (token) {
                    var jwt = new JwtHelper();
                    if (!jwt.isTokenExpired(token)) {
                        return true;
                    }
                    return false;
                }
                return false;
            }

        }
        return false;
    }
    logout() {
        if (typeof window != "undefined") {
            localStorage.clear();
            this.login$.emit(false);
        }
    }
}
export class TokenProvider {
    token: string;
    expires_in: Date;
    guid: number;
    constructor(token: string, guid: number, expiresin: Date) {
        this.token = token;
        this.guid = guid;
        this.expires_in = expiresin;
    }
}