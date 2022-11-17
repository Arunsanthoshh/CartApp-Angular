import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product-list/product-list';
import { AddProduct } from './add-product';

@Component({
  selector: 'app-custom-product',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.css']
})
export class CustomProductComponent implements OnInit {

  customForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor(private productService: ProductService) {
  }
  editItemId: number = this.productService.editItemId;
  filterItem: any[] = [];

  ngOnInit(): void {
    if (this.editItemId) {
      this.filterItem = this.productService.allProductList.filter((list) => {
        if (list.id == this.editItemId) {
          return list;
        }
      });
      if (this.filterItem.length) {
        this.customForm.setValue({
          title: this.filterItem[0]['title'],
          price: this.filterItem[0]['price'],
          description: this.filterItem[0]['description']
        });
      }
    }
  }

  loginFormSubmit() {
    let title = this.customForm.get('title')?.value;
    let price = this.customForm.get('price')?.value;
    let description = this.customForm.get('description')?.value;
    const newProducts = new AddProduct(title, price, description);
    // console.log(newProducts);
    this.customForm.reset();
    console.log(this.productService.allProductList);
    this.productService.allProductList.push(newProducts);
    console.log(this.productService.allProductList);
  }
}
