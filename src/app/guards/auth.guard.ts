import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private authService:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      
      if(!this.authService.isAuth()){

        localStorage.removeItem('authUser');
        this.authService.isAuthenticated=false;
      this.router.navigateByUrl("/login");
      return false;
    }
  return true;
   
  }
  
}
