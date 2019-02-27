import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'services/authorization.service';
import { tap } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthorizationService, private router: Router) {}

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated().pipe(
         tap(isUserAuthenticated => {
            if (!isUserAuthenticated) {
               this.router.navigate(['login']);
            }
         })
      );
   }
}
