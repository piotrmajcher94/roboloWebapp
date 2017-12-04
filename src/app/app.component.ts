import { CookieLawModule } from 'angular2-cookie-law';
import { Component } from '@angular/core';

export const baseURL = 'http://localhost:8080';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
