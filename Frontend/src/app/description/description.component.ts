import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../shared/university.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  universityDetails;
  lat:Number;
  long:Number;
  Name;
  ul;
  status:boolean;
  constructor(private _university:UniversityService,private _router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      const userId = params['Name'];
      console.log(userId);
      this._university.search("%22"+userId+"%22").subscribe(
        res=>{
          console.log(res['list']);
          this.universityDetails=res['list'];
          // this.background=this.sanitization.bypassSecurityTrustStyle('url(${this.universityDetails.image}) no-repeat');
          this.lat =Number(this.universityDetails.Latitude);
          this.long=Number(this.universityDetails.Longitude);
          this.ul=this.universityDetails.image;
      });
    });
    $(function(){
      if($('#option1').prop('checked')){
        $('#toefl').css("display","block");
      }else{
        $('#toefl').css("display","none");
      }
    });

  }
  toggle(num){
    if(num==0){
      $('#toefl').css("display","block");
      $('#ielts').css("display","none");
    }else if(num==1){
      console.log("hello");
      $('#ielts').css("display","block");
      $('#toefl').css("display","none");
    }
  }
}
