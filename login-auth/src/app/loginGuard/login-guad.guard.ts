import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../auth-services/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuadGuard implements CanActivate {

  constructor(private _authService: AuthServicesService, private router: Router) {}

  canActivate() {
    console.log("LoginGuadGuard run");
    if (this._authService.loggedIn()) {
      console.log("already logged in");
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

}
