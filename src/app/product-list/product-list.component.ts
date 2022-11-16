import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productList: any[] = [];
  ngOnInit(): void {
    console.log('Hi');
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((products) => {
        this.productList = products['products'];
      });
  }

  addCartClick(id: number, event: any) {
    this.productService.setItemList(id);
  }
}
