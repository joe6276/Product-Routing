import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../Interface/product";
import { ProductService } from "./product.service";

@Injectable({
	providedIn: "root"
})
export class ProductResolver implements Resolve<Product>{
	constructor(private productService: ProductService) { }
	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
		const id = route.params["id"];	
		return this.productService.getProduct(id)!;
	}

}