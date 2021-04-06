import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class HomeGuard implements CanActivate {
    constructor(private router: Router, private oAuthService: OAuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const claims = this.oAuthService.getIdentityClaims();
        console.log(claims);

        if (claims) { this.router.navigate(['/dashboard']); }
        return true;
    }
}