import { Component, OnInit , Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-topuniversities',
  templateUrl: './topuniversities.component.html',
  styleUrls: ['./topuniversities.component.css']
})
export class TopuniversitiesComponent implements OnInit {

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

  ngOnInit() {
  }

}
