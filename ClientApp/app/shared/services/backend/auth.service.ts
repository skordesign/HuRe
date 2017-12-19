

import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt/angular2-jwt";
import { UrlVariable } from "@shared/_variables";
import { CommonHttpService } from "@services/backend/common-http.service";

@Injectable()
export class AuthService {
    constructor(private httpClient: CommonHttpService<any>) { }
    credentialHeaderForLogin(): Headers {
        var headers = new Headers();
        if (typeof window != "undefined") {
            var jwt = new JwtHelper();
            var token = localStorage.getItem("token");
            if (token) {
                headers.append("Authorization", "Bearer " + token);
            }
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }
    login(user: any) {
        var body: any;
        body["email"] = user.email;
        body["password"] = user.password;
        console.log(body);
        return this.httpClient.post(UrlVariable.URL_LOGIN, body)
            .toPromise()
            .then(async response => {
                console.log(response);
                // if (response.ok) {
                //     var tokenAuth = (response.json() as TokenProvider);
                //     localStorage.setItem('token', tokenAuth.access_token);
                //     localStorage.setItem('userId', tokenAuth.uid.toString());
                //     localStorage.setItem('displayName', tokenAuth.displayName.toString());
                //     localStorage.setItem('urlAvatar', config.rootUrl + tokenAuth.urlAvatar);
                //     return true;
                // }
                return true;
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
    access_token: string;
    expires_in: Date;
    displayName: string;
    uid: number;
    role: number;
    urlAvatar: string;
    constructor(token: string, uid: number, expiresin: Date, displayName: string, urlAvatar: string) {
        this.access_token = token;
        this.uid = uid;
        this.expires_in = expiresin;
        this.displayName = displayName;
        this.urlAvatar = urlAvatar;
    }
}