# Angular SSO using OIDC & OAuth

1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.
2. A simple demonstration of using OAuth 2 and OpenId Connect in Angular.
3. Login via Code Flow + PKCE (Proof Key for Code Exchange).

## Identity Server
1. [Identity Provider](https://idsvr4.azurewebsites.net) 
2. Credentials: `Usernme: alice, Password: alice`.

## Dependencies
Angular OAuth 2 & OIDC Client

```npm i angular-oauth2-oidc```

## Development Server

Run `ng serve -o` for opening the dev server directly into your browser using default setting, i.e. `http://localhost:4200/`. The default host and port settings are crucial as the identity server is configured against these.

## Referenced Project

[Angular OAuth OIDC](https://github.com/manfredsteyer/angular-oauth2-oidc)
