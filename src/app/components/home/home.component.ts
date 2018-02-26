import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  accessToken = '';
  idToken = '';

  constructor(public router: Router, public oktaAuth: OktaAuthService) {
    this.accessToken = oktaAuth.getAccessToken().accessToken;
    this.idToken = oktaAuth.getIdToken().idToken;
    if (!oktaAuth.isAuthenticated()) {
      router.navigate(['login']);
    }
  }

  logout(router: Router, oktaAuth: OktaAuthService) {
    oktaAuth.logout();
    router.navigate(['login']);
  }
}
