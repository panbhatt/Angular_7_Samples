import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";
import { PageNotFoundComponent } from "./page-not-found-component.component";

import { ProductModule } from "./products/product/product.module";

const routes: Routes = [
  {
    path: "products",
    loadChildren: () => ProductModule
  },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
