import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    public cartItemList: any[] = [];
    public cartItemIds: number[] = [];
    public editItemId: number | any = null;
    public allProductList: any[] = [];
    setItemList(id: number): void {
        this.cartItemIds.push(id);
    }
}