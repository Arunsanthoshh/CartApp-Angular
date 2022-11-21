import { Observable, of } from 'rxjs';

export class Customer {
    constructor(public customerId: number, public customerName: string, public password: string, public role: string) { }
}

export let regularCustomers = [
    new Customer(1, 'arun', 'a@22', 'ADMIN'),
    new Customer(1, 'santhosh', 's@22', 'CUSTOMER'),
    new Customer(1, 'riyaan', 'r@22', 'CUSTOMER'),
    new Customer(1, 'aadya', 'a@22', 'CUSTOMER'),
];

export let customerObservable = of(regularCustomers);