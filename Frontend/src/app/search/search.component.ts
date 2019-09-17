import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../shared/university.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  universityDetails;
  columns:String[];
  searchForm:FormGroup=new FormGroup({
    search:new FormControl(null,[Validators.required])
  });
  constructor(private _router:Router,private _university:UniversityService) { }
  serverErrorMessages:String;
  ngOnInit() {
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

  search(){
    if(!this.searchForm.valid){
      console.log('invalid');
      return this.serverErrorMessages='Please provide a valid university name';
    }
    this._university.search(JSON.stringify(this.searchForm.value.search)).subscribe(
      res=>{
        this._router.navigate(['/description',this.searchForm.value.search]);
      },
      err=>{
        return this.serverErrorMessages='Please provide a valid university name';
      }

    ) }

    filter(body:any){
      console.log(body);
      this._university.filter(JSON.stringify(body)).subscribe(
        res=>{
          
        }
      )

    }

}
