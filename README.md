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

## Basic Flow

- Route to the login page incase no user is logged in.

![home](https://user-images.githubusercontent.com/37273194/113785031-c9df5780-974f-11eb-9b17-938c954359c2.PNG)

- Proceed to the next page after getting response from Identity Provider while making sure (via guard) that valid Id and access tokens are present.

![logged_in](https://user-images.githubusercontent.com/37273194/113785034-cba91b00-974f-11eb-8a09-d7452968eedb.PNG)

## Referenced Project

[Angular OAuth OIDC](https://github.com/manfredsteyer/angular-oauth2-oidc)
