import { Component, OnInit } from '@angular/core' ;

import { IProduct}  from './product.model' ;
import { ProductsService} from './product.service';


@Component({
    selector : 'app-products',
    styleUrls : ['./product-list.component.css'],
    templateUrl : './product-list.component.html'
}) 
export class ProductListComponent implements OnInit{

    pageTitle : string = " Product List ";
    imageHeight : number = 50;
    imageWidth : number = 60; 
    showImage : boolean = false; 
    _listFilter : string = '' ;

    get listFilter(): string { 
        return this._listFilter; 
    }

    set listFilter(value : string) {
        this._listFilter = value ; 
        this.filteredProducts = this.products.filter((prd) => prd.productName.toLowerCase().indexOf(value) !=-1  )
    }

    filteredProducts : IProduct [] = []; 
    products : IProduct[] ; 

    toggleImage() : void {
        this.showImage = !this.showImage; 
    }

    ngOnInit() : void {
        console.log("I am starting the APPP via ONINIT"); 
        this.filteredProducts = this.products = this.productService.getProducts(); 
        this.productService.getProductsOb().subscribe(
            val => console.log("Getting Value from service " + val), 
            err => console.error("An Error Occured " + err) 
        )
    }

    constructor(private productService : ProductsService) {
        this.filteredProducts = this.products ; 
        
    }

    ratingClicked(message : string) : void{
        console.log(' An Event is being captured here ' + message ) ;
    }


}