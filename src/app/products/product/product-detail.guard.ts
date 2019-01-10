import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next.url);
    let id = next.url[0].path;

    if (isNaN(id + "") || parseInt(id) < 1) {
      alert("Invalid Guard");
      this.router.navigate(["/products"]);
      return false;
    }
    return true;
  }
}
