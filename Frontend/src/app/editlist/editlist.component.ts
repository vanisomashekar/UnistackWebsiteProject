import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniversityService } from '../shared/university.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {
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
  id;
  userDetails;
  lists;
  Comment;
  Status;
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.name= params['email'];
      this.id=params['id'];
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
    this._user.getUser(this.name).subscribe(
      res=>{
        this.userDetails = res['user'];
        for(let list of this.userDetails.Checklists){
          if(list._id == this.id){
            this.lists = list.Universityname;
            this.Comment = list.Comments;
            this.Status = list.Status;
          }
        }
         
      }
    )
  }
  onDelete(){
    this._user.deleteChecklist(this.name,this.id).subscribe(
      res=>{
        console.log("here");
       this._route.navigateByUrl('/userprofile');
      },
      err=>{
        this.serverErrorMessages = "Error in delete";
      });
    }
  onSubmit(){
    console.log("here");
    if(!this.universityForm.valid){
      console.log('invalid');
      return this.serverErrorMessages='Please provide a valid Values for all the fields';
    }
    this._user.editChecklist(this.name,this.id,JSON.stringify(this.universityForm.value)).subscribe(
      res=>{
        console.log("here");
       this._route.navigateByUrl('/userprofile');
      },
      err=>{
        this.serverErrorMessages = "Provide valid values";
      });
  }
}

