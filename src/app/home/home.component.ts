import { Component } from '@angular/core';

import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';

import { authCodeFlowConfig } from '../sso.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private oAuthServie: OAuthService) {
    this.configureSSO();
  }

  private configureSSO(): void {
    this.oAuthServie.configure(authCodeFlowConfig);
    this.oAuthServie.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthServie.loadDiscoveryDocumentAndTryLogin();

    /** 
     * Use this, when you want to redirect the user straight to the login page
     * No need for login, logout methods when using this.
     */
    // this.oAuthServie.loadDiscoveryDocumentAndLogin();
  }

  public login_onClick(): void {
    this.oAuthServie.initImplicitFlow();
  }

  public get token(): object | null {
    return this.oAuthServie.getIdentityClaims() ?? null;
  }
}
