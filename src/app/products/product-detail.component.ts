import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product.model";
import { ProductsService } from "./product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  _products: IProduct[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    console.log("ID = " + id);
    this.pageTitle += "  " + id;
    this._products = this.productService.getProducts();
    console.log("Length  = " + this._products.length);
    this.product = this._products.filter(
      prd => prd.productId === Number(id)
    )[0];
  }

  onBack(): void {
    this.router.navigate(["/products"]);
  }
}
