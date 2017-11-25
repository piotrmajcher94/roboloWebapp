import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthRestService } from './auth/rest/auth.rest.service';
import { ProjectService } from './projects/services/project.service';
import { ProjectRest } from './projects/rest/project.rest';
import { AuthErrorHandler } from './auth/auto-error.handler';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkersListItemComponent } from './workers/workers-list/workers-list-item/workers-list-item.component';
import { WorkerEditComponent } from './workers/worker-edit/worker-edit.component';
import { WorkersListComponent } from './workers/workers-list/workers-list.component';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'register/confirmation', component: ConfirmationComponent},
  {path: 'password-recovery', component: PasswordRecoveryComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':id/details', component: ProjectDetailsComponent},
    {path: 'all', component: ProjectsListComponent}
  ]},
  {path: 'workers', component: WorkersComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: 'all', component: WorkersListComponent},
    {path: 'edit', component: WorkerEditComponent}
  ]},
  {path: '', redirectTo: 'projects', pathMatch: 'full'}
];


@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}

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
    ProjectDetailsComponent,
    ProjectEditComponent,
    WorkersComponent,
    WorkersListComponent,
    WorkersListItemComponent,
    WorkerEditComponent,
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
    NgcFloatButtonModule,
    CookieLawModule,
    MaterialModule
  ],
  providers: [
    AuthRestService, 
    ProjectService, 
    ProjectRest, 
    AuthService, 
    AuthGuard,
    AuthErrorHandler],
  bootstrap: [AppComponent],
  entryComponents: [ProjectEditComponent]
})
export class AppModule { }