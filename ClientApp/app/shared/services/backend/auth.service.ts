

import { Injectable, EventEmitter } from "@angular/core";
import { JwtHelper } from "angular2-jwt/angular2-jwt";
import { UrlVariable } from "@shared/_variables";
import { CommonHttpService } from "@services/backend/common-http.service";
import { Headers } from '@angular/http';

@Injectable()
export class AuthService {
    login$: EventEmitter<boolean> = new EventEmitter();
    constructor(private httpClient: CommonHttpService<any>) { }
    createHeader(): Headers {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        // .set("Content-Type", "application/json");
        return headers;
    }
    async login(user: any): Promise<boolean> {
        let body = {
            username: user.username,
            password: user.password
        }
        try {
            let token = await this.httpClient.post(UrlVariable.URL_LOGIN, body, this.createHeader()).toPromise();
            var tokenAuth = (token as TokenProvider);
            localStorage.setItem('token_hure', tokenAuth.token);
            localStorage.setItem('userId', tokenAuth.guid.toString());
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
    logout() {
        localStorage.clear();
        this.login$.emit(false);
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