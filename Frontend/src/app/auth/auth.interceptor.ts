import {HttpInterceptor,HttpRequest, HttpHandler,HttpEvent } from "@angular/common/http";
import { Injectable} from '@angular/core';
import { tap} from 'rxjs/operators';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private _user:UserService,private _router:Router){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        if(req.headers.get('noauth'))
        {
            console.log(req);
            const clonedreq = req.clone({
                headers:req.headers.set("Authorization","Bearer "+ this._user.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event=>{},
                    err=>{
                        if(err.error.auth == false){
                            this._router.navigateByUrl('/');
                        }
                    }
                )
            )
        }
        else return next.handle(req.clone());
    }
}