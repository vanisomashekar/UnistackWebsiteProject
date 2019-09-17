import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

import { Router} from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup = new FormGroup({
email: new FormControl(null,[Validators.email,Validators.required]),
password :new FormControl(null,Validators.required),
cpassword:new FormControl(null,Validators.required)
  })
  serverErrorMessages:string;
  constructor(private _router:Router,private _userService:UserService) { }
  ngOnInit() {
  }
  
 register(){
   if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpassword.value)){
     console.log('Invalid Form'); 
     this.serverErrorMessages="Please provide valid values";
     return;
   }else if(this.valid() == false){
    this.serverErrorMessages="Please provide a strong password.";
    return;
   }
   this._userService.register(JSON.stringify(this.registerForm.value))
   .subscribe(
     res=>{
      this.serverErrorMessages= res['message'];
      console.log(this.registerForm.controls.email.value);
      this._router.navigateByUrl("/afterRegister/"+this.registerForm.controls.email.value);
     },
     err =>{
      this.serverErrorMessages =err.error.message;
     }
   )
  //  console.log(JSON.stringify(this.registerForm.value));
 }

 valid(){
  var password =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_])[a-zA-Z0-9\W\_]{8,15}$/;
  if(password.test( this.registerForm.controls.password.value)){
    console.log("here");
    return true;
  }else{
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls.zipcode.value);
    return false;
  }
}
}