import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthRestService } from './auth/rest/auth.rest.service';
import { ProjectService } from './services/project.service';
import { ProjectRest } from './rest/project.rest';
import { AuthErrorHandler } from './auth/auto-error.handler';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgcFloatButtonModule } from 'ngc-float-button';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ConfirmationComponent } from './auth/registration/confirmation/confirmation.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsListItemComponent } from './projects/projects-list/projects-list-item/projects-list-item.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'register/confirmation', component: ConfirmationComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], children: [
    {path: ':id/details', component: ProjectDetailsComponent},
    {path: '', component: ProjectsListComponent}
  ]},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ConfirmationComponent,
    PasswordRecoveryComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsListItemComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CookieLawModule,
    NgcFloatButtonModule
  ],
  providers: [
    AuthRestService, 
    ProjectService, 
    ProjectRest, 
    AuthService, 
    AuthGuard,
    AuthErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
