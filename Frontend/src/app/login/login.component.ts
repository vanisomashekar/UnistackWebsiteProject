import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { modalConfigDefaults } from 'ngx-bootstrap/modal/modal-options.class';
import{ModalComponent}from 'angular-custom-modal';
// import { MatDialog } from '@angular/material';
// import { ProfileComponent } from '../profile/profile.component';
// import { ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required)
  });
  @ViewChild('modalLoginForm') public modal:ElementRef;
  constructor(private _router:Router,private _user:UserService) { }
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
        $("#close").click();       
        },
      err=>{
        this.serverErrorMessages =err.error.message;
      }
    )
  }
}
