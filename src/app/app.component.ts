import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private authSerive: AuthService) { }
  // loginForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });
  // errorMsg: boolean = false;
  // userStatus: string = '';
  // loginFormSubmit() {
  //   let userName = this.loginForm.get('username')?.value;
  //   let password = this.loginForm.get('password')?.value;
  //   this.authSerive.isUserAuthenticated(userName, password).subscribe(authenticated => {
  //     if (authenticated) {
  //       this.userStatus = 'LoggedIn Suceessfully.';
  //       let userDetails = this.authSerive.getLoggedInUser();
  //       console.log(userDetails.role);
  //     } else {
  //       this.errorMsg = true;
  //       this.userStatus = 'Credentials does not exist....';
  //     }
  //   });


  //   console.log("user name is " + this.loginForm.get('username')?.value);
  // }
}
