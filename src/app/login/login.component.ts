import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  errorMsg: boolean = false;
  userStatus: string = '';
  loginFormSubmit() {
    let userName = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.authService.isUserAuthenticated(userName, password).subscribe(authenticated => {
      if (authenticated) {
        this.userStatus = 'LoggedIn Suceessfully.';
        let url = this.authService.getRedirectUrl();
        console.log('Redirect Url:' + url);
        this.router.navigate([url]);
      } else {
        this.errorMsg = true;
        this.userStatus = 'Credentials does not exist....';
      }
    });

    console.log("user name is " + this.loginForm.get('username')?.value);
  }
}
