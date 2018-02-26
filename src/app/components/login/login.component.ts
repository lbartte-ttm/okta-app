import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public router: Router, public oktaAuth: OktaAuthService) {
    if (oktaAuth.isAuthenticated()) {
      router.navigate(['home']);
    }
  }
}
