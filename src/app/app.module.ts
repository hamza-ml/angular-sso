import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';
import { HomeGuard } from './home/home.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [AuthGuard, HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
