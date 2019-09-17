import { Component,OnInit , Inject, HostListener} from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
@Component({
  selector: 'app-universityreviews',
  templateUrl: './universityreviews.component.html',
  styleUrls: ['./universityreviews.component.css']
})
export class UniversityreviewsComponent implements OnInit {

  expand:boolean=true;
  expandHarvard:boolean=true;
  expandUCLA:boolean=true;
  expandCSU:boolean=true;

  // constructor() { }

  navIsFixed: boolean;
  constructor(@Inject(DOCUMENT) private document: Document){

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.navIsFixed = true;
      } else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { this.navIsFixed = false; } } scrollToTop() { (function smoothscroll() { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 5));
          }
      })();
  }
// 



  toggle(){
    if(this.expand == true){
      this.expand=false;
      this.expandHarvard=true;
      this.expandUCLA=true;
      this.expandCSU=true;
    }
    else{
      this.expand=true;
    }
  }

  toggleHarvard(){
    if(this.expandHarvard == true){
      this.expandHarvard=false;
      this.expand=true;
      this.expandUCLA=true;
      this.expandCSU=true;
    }
    else{
      this.expandHarvard=true;
    }
  }

  toggleUCLA(){
    if(this.expandUCLA == true){
      this.expandUCLA=false;
      this.expand=true;
      this.expandHarvard=true;
      this.expandCSU=true;
    }
    else{
      this.expandUCLA=true;
    }
  }

  toggleCSU(){
    if(this.expandCSU == true){
      this.expandCSU = false;
      this.expandUCLA=true;
      this.expand=true;
      this.expandHarvard=true;
    }
    else{
      this.expandCSU=true;
    }
  }


  ngOnInit() {
  }

}
