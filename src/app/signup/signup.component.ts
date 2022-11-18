import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product-list';
import { AuthService } from '../services/auth.service';
import { Customer, regularCustomers, customerObservable } from '../services/customer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    c_password: new FormControl()
  });

  constructor(private authService: AuthService, private router: Router) {
    console.log(this.authService.getAllUsers());
  }

  successMsg: string = '';

  ngOnInit(): void {
  }

  signFormSubmit() {
    let name = this.signupForm.get('name')?.value;
    let password = this.signupForm.get('password')?.value;
    let c_password = this.signupForm.get('c_password')?.value;
    if (password === c_password) {
      regularCustomers.push(new Customer(1, name, password, 'CUSTOMER'));
      this.successMsg = '*Customer credential successfully added.';
      this.router.navigate(['/login'])
    } else {
      this.successMsg = '*Passwords does not match. Please check again.';
    }
  }

}
