import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../shared/university.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  universityDetails;
  columns:String[];
 universityForm:FormGroup=new FormGroup({
    Universityname:new FormControl(null,[Validators.required]),
    Status:new FormControl(null,[Validators.required]),
    Comments:new FormControl(null,[Validators.required])
  });
  constructor(private _university:UniversityService,private _route:Router, private _user:UserService ,private activatedRouter:ActivatedRoute ) { }
  serverErrorMessages;
  name;
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.name= params['email'];
    });
    this._university.getUniversity().subscribe(
      res=>{
        console.log(res['list']);
        this.universityDetails=res['list'];
        this.columns=this._university.getColumns();
      },
      err=>{
      }
    );
  }
  onSubmit(){
    console.log("here");
    if(!this.universityForm.valid){
      console.log('invalid');
      return this.serverErrorMessages='Please provide a valid Values for all the fields';
    }
    this._user.setChecklist(this.name,JSON.stringify(this.universityForm.value)).subscribe(
      
      res=>{
        console.log("here");
       this._route.navigateByUrl('/userprofile');
      },
      err=>{
        this.serverErrorMessages = "Provide valid values";
      });
  }
}
