import { Iproduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ProductService{
    getProducts(): Iproduct[]{
        return [
            {
                "productId":2,
                "ProductName":"Garden",
                "productCode":"GBN-0023",
                "releaseDate":"March 18, 2019",
                "description":"15 gallon capacity rolling garden",
                "price":32.99,
                "startRating":4,
                "imageUrl":"assets/images/yard-cart.jpg"
            },
            {
                "productId":2,
                "ProductName":"cart",
                "productCode":"GBN-0023",
                "releaseDate":"March 18, 2019",
                "description":"15 gallon capacity rolling garden",
                "price":32.99,
                "startRating":2.5,
                "imageUrl":"assets/images/yard-cart.jpg"
            }
        ];
    }
}