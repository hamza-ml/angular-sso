import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

import { authCodeFlowConfig } from '../sso.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private route: Router, private oAuthServie: OAuthService) {
    this.configureSSO();
  }

  private configureSSO(): void {
    this.oAuthServie.configure(authCodeFlowConfig);
    this.oAuthServie.loadDiscoveryDocumentAndTryLogin();

    /** 
     * Use this, when you want to redirect the user straight to the login page.
     * No need for login and logout methods when using this.
     */
    // this.oAuthServie.loadDiscoveryDocumentAndLogin();
  }

  public btnLogin_onClick = () => this.oAuthServie.initCodeFlow();
  public btnDashboard_onClick = () => this.route.navigate(['/dashboard']);

  public get token(): object | null {
    return this.oAuthServie.getIdentityClaims() ?? null;
  }
}
