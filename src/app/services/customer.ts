import { Observable, of } from 'rxjs';

export class Customer {
    constructor(public customerId: number, public customerName: string, public password: string, public role: string) { }
}

export let regularCustomers = [
    new Customer(1, 'a', 'a', 'ADMIN'),
    new Customer(1, 'Santhosh', 's@22', 'CUSTOMER'),
    new Customer(1, 'Priya', 'p@22', 'CUSTOMER'),
    new Customer(1, 'Dharsini', 'd@22', 'CUSTOMER'),
];

export let customerObservable = of(regularCustomers);