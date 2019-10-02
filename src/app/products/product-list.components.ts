import { Component, OnInit } from '@angular/core';
import {Iproduct} from './product'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.components.html'
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    listFilter: string = 'cart';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get plistFilter(): string{
        return this._listFilter;
    }
    set plistFilter(value:string){
        this._listFilter = value;
        this.filterProducts = this.plistFilter? this.performFilter(this.plistFilter) : this.products;
    }

    filterProducts:Iproduct[];

    products: Iproduct[]=[
        {
            "productId":2,
            "ProductName":"Garden",
            "productCode":"GBN-0023",
            "releaseDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "startRating":4.2,
            "imageUrl":"assets/images/yard-cart.jpg"
        },
        {
            "productId":2,
            "ProductName":"cart",
            "productCode":"GBN-0023",
            "releaseDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "startRating":4.2,
            "imageUrl":"assets/images/yard-cart.jpg"
        }
    ]
    constructor(){
        this.filterProducts = this.products;
        this.plistFilter = 'cart'
    }
    performFilter(filterBy:string): Iproduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) => product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In onInit');
    }
}