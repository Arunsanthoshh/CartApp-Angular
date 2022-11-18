import { Injectable } from '@angular/core';
import { productsList } from '../product-list';

@Injectable()
export class ProductService {
    public cartItemList: any[] = [];
    public cartItemIds: number[] = [];
    public editItemId: number | any = null;
    public allProductList: any[] = [];

    constructor() {
        // fetch('https://dummyjson.com/products')
        //     .then((res) => res.json())
        //     .then((products) => {
        //         this.allProductList = products['products'];
        //     });
        this.allProductList = productsList['products'];
    }
    
    setItemList(id: number): void {
        this.cartItemIds.push(id);
    }
}