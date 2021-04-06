import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  constructor(private route: Router, private oAuthServie: OAuthService) { }
  
  public btnLogout_onClick(): void {
    /**
     * Clears used token store (sessionStorage).
     * Incase a logout endpoint is configured it forwards the user to auth servers logout endpoint.
     */
    // 
    this.oAuthServie.logOut();
    this.route.navigate(['/'])

    /** 
     * Revoke existing access token and refresh token as well on logout.
     */
    // this.oAuthServie.revokeTokenAndLogout();
  }

  public get token(): object | null {
    return this.oAuthServie.getIdentityClaims() ?? null;
  }

  public get username(): string | null {
    const claims: any = this.oAuthServie.getIdentityClaims();
    return claims?.given_name ?? null;
  } 
}
