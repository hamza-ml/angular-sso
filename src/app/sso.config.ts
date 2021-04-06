/**
 * Using referenced project's config settings (see readme).
 */ 


import { AuthConfig } from 'angular-oauth2-oidc';

  export const authCodeFlowConfig: AuthConfig = {
    // Identity Provider.
    issuer: 'https://idsvr4.azurewebsites.net',

    // SPA URL to redirect after login.
    redirectUri: window.location.origin + '/index.html',

    // SPA is registered with this id in the auth-server.
    // clientId: 'server.code',
    clientId: 'spa',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',
    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    scope: 'openid profile email offline_access api',

    showDebugInformation: true,

    // logoutUrl: 'http:localhost:4200'
  };