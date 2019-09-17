import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  constructor(private _router:Router,private _user:UserService) { }

  ngOnInit() {
    this._user.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
        console.log(res['user']);
      },
      err=>{
      }
    );
  }
 
  checklist(){
    this._router.navigateByUrl("checklist");
  }


}
