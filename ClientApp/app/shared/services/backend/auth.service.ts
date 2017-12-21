

import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt/angular2-jwt";
import { UrlVariable } from "@shared/_variables";
import { CommonHttpService } from "@services/backend/common-http.service";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private httpClient: CommonHttpService<any>) { }
    createHeader(): HttpHeaders {
        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");
        return headers;
    }
    login(user: any): Promise<boolean> {
        let body = {
            username: user.username,
            password: user.password
        }
        return this.httpClient.post(UrlVariable.URL_LOGIN, body, this.createHeader())
            .toPromise()
            .then(async response => {
                if (response) {
                    var tokenAuth = (response as TokenProvider);
                    localStorage.setItem('token', tokenAuth.token);
                    localStorage.setItem('userId', tokenAuth.guid.toString());
                    return true;
                } else {
                    return false;
                }
            }).catch(err => {
                return false;
            });
    }
    private extractdata(res: Response) {
        let body = res.json();
        return body || {};
    }
    isLogged() {
        var token = localStorage.getItem("token");
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