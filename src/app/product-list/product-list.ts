import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    public cartItemList: any[] = [];
    public cartItemIds: number[] = [];
    public editItemId: number | any = null;
    public allProductList: any[] = [];

    constructor() {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((products) => {
                this.allProductList = products['products'];
            });
    }
    
    setItemList(id: number): void {
        this.cartItemIds.push(id);
    }
}