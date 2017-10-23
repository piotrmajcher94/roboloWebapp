import { AuthService } from './auth/auth.service';
import { AuthRestService } from './shared/auth-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthRestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
