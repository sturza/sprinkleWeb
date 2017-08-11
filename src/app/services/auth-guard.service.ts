import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (route.url.toString() === 'login'|| route.url.toString()==='register') {
      if (localStorage.getItem('userToken') != null) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    else {
      if (localStorage.getItem('userToken') != null) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
  }
}
