import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetail{
    pageTitle: string = 'Product Detail';
    products: IProduct;
}