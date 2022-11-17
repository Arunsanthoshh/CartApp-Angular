import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from './product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }
  productList: any[] = [];
  userRole: string = this.authService.getLoggedInUser().role;
  buttonText: string = this.userRole == 'ADMIN' ? 'Edit product' : 'Add to cart';
  ngOnInit(): void {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((products) => {
        this.productList = products['products'];
        this.productService.allProductList = products['products'];
      });
  }

  buttonClick(id: number) {
    if (this.buttonText == 'Edit product') {
      this.productService.editItemId = id;
      this.router.navigate(['/edit-product']);
    } else {
      this.productService.setItemList(id);
    }
  }

  addButtonClick() {
    this.productService.editItemId = null;
    this.router.navigate(['/edit-product']);
  }
}
