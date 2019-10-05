import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import {Iproduct} from './product'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.components.html'
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filterProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts:Iproduct[];

    products: Iproduct[];
    constructor(private productService: ProductService){
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
        this.products = this.productService.getProducts();
        this.filterProducts = this.products;
    }
}