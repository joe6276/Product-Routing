import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn:"root"
})
export class AuthGuard implements CanActivate, CanActivateChild{

	constructor(private authService: AuthService, private router: Router){}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		if (this.authService.isLoggedIn()) {
			return true;
		}
		else {
			this.router.navigate(["/"])
			return false;
		}
		
	}
	
	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean > | Promise<boolean> {
		return this.canActivate(childRoute, state);
		
	}
}