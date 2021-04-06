import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private oAuthService: OAuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let hasIdToken = this.oAuthService.hasValidIdToken();
        let hasAccessToken = this.oAuthService.hasValidAccessToken();

        const hasToken: boolean = hasIdToken && hasAccessToken;

        if (!hasToken) {
            alert('Id or access token are missing. Redirecting to home page.');
            this.router.navigate(['']);
        }
        return hasToken;
    }
}