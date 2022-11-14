import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Customer } from './customer';

const RegularCustomers = [
    new Customer(1, 'a', 'a', 'ADMIN'),
    new Customer(1, 'Santhosh', 's@22', 'CUSTOMER'),
    new Customer(1, 'Priya', 'p@22', 'CUSTOMER'),
    new Customer(1, 'Dharsini', 'd@22', 'CUSTOMER'),
];

let customerObservable = of(RegularCustomers);

@Injectable()
export class AuthService {
    private redirectUrl: string = '/';
    private loginUrl: string = '/login';
    private isloggedIn: boolean = false;
    private loggedInUser = {} as Customer;
    getAllUsers(): Observable<Customer[]> {
        return customerObservable;
    }
    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUsers().pipe(
            map(users => {
                let user = users.find(user => (user.customerName === username) && (user.password === password));
                if (user) {
                    this.isloggedIn = true;
                    this.loggedInUser = user;
                } else {
                    this.isloggedIn = false;
                }
                return this.isloggedIn;
            }));
    }
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
    getRedirectUrl(): string {
        return this.redirectUrl;
    }
    setRedirectUrl(url: string): void {
        this.redirectUrl = url;
    }
    getLoginUrl(): string {
        return this.loginUrl;
    }
    getLoggedInUser(): Customer {
        return this.loggedInUser;
    }
    logoutUser(): void {
        this.isloggedIn = false;
    }

}