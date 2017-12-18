import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private _router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (typeof window !== "undefined") { // check if not localStorage is not defined
            var jwt = new JwtHelper();
            var token = localStorage.getItem('token');
            if (token) {

                if (jwt.isTokenExpired(token)) {
                    this._router.navigate(["admin/login"]);
                    return false;
                } else {
                    var roleJson = jwt.decodeToken(token);
                    console.log(roleJson);
                    var role = roleJson.role;
                    if (role == "Admin") {
                        return true;
                    }
                    return false;
                }
            } else {
                this._router.navigate(["admin/login"]);
            }
            return false;
        } else {
            return false;
        }
    }
}