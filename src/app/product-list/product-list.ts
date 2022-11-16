import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    public cartItemList: any[] = [];
    public cartItemIds: number[] = [];
    setItemList(id: number): void {
        this.cartItemIds.push(id);
    }
}