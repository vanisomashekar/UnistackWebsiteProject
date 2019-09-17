import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  noAuthHeader =  {headers: new HttpHeaders({'NoAuth':'True'})};
  constructor(private _http:HttpClient) { }
  register(body:any){
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  deleteChecklist(email,id){
    return this._http.delete('http://127.0.0.1:3000/users/checklist/'+email+'/'+id);
  }
  setChecklist(email,body:any){
    return this._http.put('http://127.0.0.1:3000/users/checklist/'+email,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  editChecklist(email,id,body:any){
    return this._http.put('http://127.0.0.1:3000/users/checklist/'+email+'/'+id,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  update(email,body:any){
    return this._http.put('http://127.0.0.1:3000/users/update/'+email,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }
  getUserProfile(){
    return this._http.get('http://127.0.0.1:3000/users/userprofile',this.noAuthHeader);
  }
  getUser(body:any){
    console.log(body);
    return this._http.get('http://127.0.0.1:3000/users/user/'+body);
  }
  public isAuthenticated():boolean{
    return this.getToken()!== null;
  }
  storeToken(token:string){
    localStorage.setItem("token",token);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload =atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
    return null;
  }

  isLoggedIn(){
    var userPayload= this.getUserPayload();
    if(userPayload)
    return userPayload.exp >Date.now()/1000;
    else
    return false;
  }
  removeToken(){
     localStorage.removeItem("token");
  }

}
