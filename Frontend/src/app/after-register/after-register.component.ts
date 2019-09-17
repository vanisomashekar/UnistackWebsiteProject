import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-after-register',
  templateUrl: './after-register.component.html',
  styleUrls: ['./after-register.component.css']
})
export class AfterRegisterComponent implements OnInit {
  userDetails;
  constructor(private _router: Router, private _user: UserService, private activatedRouter: ActivatedRoute) { }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phonecode: new FormControl(null, [Validators.required]),
    phonenumber: new FormControl(null, Validators.required),
    birthYear: new FormControl(null, Validators.required),
    birthMonth: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    zipcode: new FormControl(null, [Validators.required]),
    City: new FormControl(null, Validators.required),
    GRE: new FormControl(null),
    englishgrade: new FormControl(null),
    WorkExperience: new FormControl(null)
  });
  serverErrorMessages;
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      const userEmail = params['email'];
      console.log(userEmail);
      this._user.getUser(userEmail).subscribe(
        res => {
          this.userDetails = res['user'];
          console.log(res['user']);
        },
        err => {
        });
    });
  }
  userinfo() {
    var greValue = this.registerForm.controls.GRE.value;
    var toefl = this.registerForm.controls.englishgrade.value;
    var we = this.registerForm.controls.WorkExperience.value;
    if (!this.registerForm.valid) {
      console.log("here");
      console.log(this.registerForm.status);
      this.serverErrorMessages = "Please provide valid values";
      return;
    } else if (this.valid() == false) {
      console.log(this.valid());
      this.serverErrorMessages = "Please provide valid values";
      return;
    }else if(greValue != undefined && toefl != undefined && we != undefined && this.Validation() == false){
      return;
    }
    this.activatedRouter.params.subscribe(params => {
      const userEmail = params['email'];
      this._user.update(userEmail, JSON.stringify(this.registerForm.value))
        .subscribe(
          res => {
            this._router.navigateByUrl('/loginpage');
          },
          err => {
            this.serverErrorMessages = "Provide valid values";
          });
    })
  }

  Validation() {
    var greValue = this.registerForm.controls.GRE.value;
    var toefl = this.registerForm.controls.englishgrade.value;
    var we = this.registerForm.controls.WorkExperience.value;
    console.log(greValue);
      if (this.validGRE() == true && this.validToefl() == true && this.validWorkexperience() == true) {
        return true;
      } else {
        return false;
      }
  }

  valid() {
    var number = /^\d{5}$/;
    var contact = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (number.test(this.registerForm.controls.zipcode.value) && contact.test(this.registerForm.controls.phonenumber.value)) {
      return true;
    } else {
      console.log(this.registerForm.value);
      console.log(this.registerForm.controls.zipcode.value);
      return false;
    }
  }
  validGRE() {
    var gre = /^\d{3}$/;
    var greValue = this.registerForm.controls.GRE.value;
    if (greValue >= 260 && greValue <= 340) {
      return true;
    } else {
      this.serverErrorMessages = "Please provide valid GRE scores";
      return false;
    }
  }
  validToefl() {
    var toefl = this.registerForm.controls.englishgrade.value;
    if (toefl >= 0 && toefl <= 120) {
      return true;
    } else {
      this.serverErrorMessages = "Please provide valid Toefl scores";
      return false;
    }
  }

  validWorkexperience() {
    var we = this.registerForm.controls.WorkExperience.value;
    if (we >= 0 && we <= 10) {
      return true;
    } else {
      this.serverErrorMessages = "Please provide valid WorkExperience scores";
    }
  }
}

