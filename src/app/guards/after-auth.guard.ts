import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AfterAuthGuard implements CanActivate {

  constructor(private router:Router,private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.authService.isAuth()){

        this.authService.isAuthenticated=true;
      this.router.navigateByUrl("/");
      return false;
    }
  return true;
  }
  
}
