import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visaprep',
  templateUrl: './visaprep.component.html',
  styleUrls: ['./visaprep.component.css']
})
export class VisaprepComponent implements OnInit {
  viewusreq:boolean=false;
  viewusinterview:boolean=false;
  viewcanadareq:boolean=false;
  viewcanadainterview:boolean=false;
  viewaustraliareq:boolean=false;
  viewaustraliainterview:boolean=false;
  likes:number=0;
  dislikes:number=0;

  constructor() { }

  like(){
    this.likes += 1; 
  }

  dislike(){
    this.dislikes += 1;
  }

  toggleusvisareq(){
    
      this.viewusreq = !this.viewusreq;
      this.viewusinterview = false;
    
  }
  toggleusinterview(){
    
    this.viewusreq = false;
    this.viewusinterview = !this.viewusinterview;
  
}

togglecanadavisareq(){
    
  this.viewcanadareq = !this.viewcanadareq;
  this.viewcanadainterview = false;

}
togglecanadainterview(){

this.viewcanadareq = false;
this.viewcanadainterview = !this.viewcanadainterview;

}

toggleaustraliavisareq(){
    
  this.viewaustraliareq = !this.viewaustraliareq;
  this.viewaustraliainterview = false;

}
toggleaustraliainterview(){

this.viewaustraliareq = false;
this.viewaustraliainterview = !this.viewaustraliainterview;

}


  ngOnInit() {
  }

}
