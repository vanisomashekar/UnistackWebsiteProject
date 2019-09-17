import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _user:UserService,private _router:Router) { }
  Status:boolean;
  status1:boolean;
  sectionScroll;
  userDetails;
  internalRoute(page,dst){
    this.sectionScroll=dst;
    this._router.navigate([page], {fragment: dst});
  }
  ngOnInit() {
    if(this._user.isAuthenticated()){
      this.Status=true;
      this.status1=false;
      this._user.getUserProfile().subscribe(
        res=>{
          this.userDetails=res['user'];
          console.log(res['user']);
          console.log(this.userDetails);
        },
        err=>{
        }
      );
    }else{
      this.Status=false;
      this.status1=true;
    }
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll= null;
    });
  }
  doScroll() {

    if (!this.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this.sectionScroll);

      elements.scrollIntoView();
    }
    finally{
      this.sectionScroll = null;
    }
  } 
  onLogout(){
    this._user.removeToken();
    this._router.navigate(['/']);
    this.Status=false;
    this.status1=true;
  }
}
