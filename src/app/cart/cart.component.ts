import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-list/product-list';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private productService: ProductService) {
  }
  cartItemList: any[] = [];
  ngOnInit(): void {
    this.productService.cartItemList = [];
    this.productService.cartItemIds.map((itemId) => {
      this.productService.cartItemList.push(this.productService.allProductList[itemId - 1]);
    })
    this.cartItemList = this.productService.cartItemList;
  }

  removeCartClick(clickId: number) {
    this.cartItemList = this.cartItemList.filter((list) => {
      return !(list['id'] == clickId)
    });
  }

}
