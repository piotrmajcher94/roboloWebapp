import { Router } from '@angular/router';
import { AuthService } from "../auth/services/auth.service";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public isCollapsed = true;
  constructor(private router: Router, private authService: AuthService) { }

  isUserLoggedIn() {
    return !this.authService.isTokenExpired();
  }
}
