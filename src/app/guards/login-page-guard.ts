import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthorizationService } from 'services/authorization.service';

@Injectable({
   providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {

   constructor(private authService: AuthorizationService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isAuthenticated()) {
         this.router.navigate(['']);
         return false;
      } else {
         return true;
      }
   }
}
