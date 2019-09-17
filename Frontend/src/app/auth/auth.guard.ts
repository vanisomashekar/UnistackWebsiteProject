import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _user:UserService,private _router:Router){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      if(!this._user.isLoggedIn()){
        this._router.navigateByUrl('/');
        this._user.removeToken();
        return false;
      }
    return true;
    }
}
