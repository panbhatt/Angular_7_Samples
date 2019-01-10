import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";

import { ConvertToSpacePipe } from "./convert-to-spaces.pipe";

import { ProductDetailComponent } from "./product-detail.component";

import { ProductDetailGuard } from "./product-detail.guard";
import { SharedModule } from "../../shared/shared.module";

/*const routes: Routes = [
  {
    path: "products",
    loadChildren: "./products/product/product.module#ProductModule"
  }
]; */

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: "", component: ProductListComponent },
      {
        path: ":id",
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
