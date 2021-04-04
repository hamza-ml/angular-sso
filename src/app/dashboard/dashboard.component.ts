import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private oAuthServie: OAuthService) { }

  ngOnInit(): void {
    console.log(this.oAuthServie.getIdentityClaims())
  }
  
  public logout_onClick(): void {
    this.oAuthServie.logOut();
  }

  public get token(): object | null {
    return this.oAuthServie.getIdentityClaims() ?? null;
  }
}
