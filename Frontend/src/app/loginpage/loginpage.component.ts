import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private _router:Router,private _user:UserService) { }
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required)
  });
  serverErrorMessages:string;
  ngOnInit() {
  }
  login(){
    if(!this.loginForm.valid){
      console.log('invalid');
      return this.serverErrorMessages='invalid';
    }
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      res =>{
        this._user.storeToken(res['token']);
        this.serverErrorMessages= res['message'];
        this._router.navigateByUrl('/userprofile');
        },
      err=>{
        this.serverErrorMessages =err.error.message;
      }
    )
  }

}
