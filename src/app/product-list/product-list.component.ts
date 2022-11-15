import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  productList: any[] = [];
  ngOnInit(): void {
    console.log('Hi');
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((products) => {
        this.productList = products['products'];
      })
      .then(console.log);
  }
}
