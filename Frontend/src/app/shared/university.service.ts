import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
    constructor(private _http:HttpClient) { }

    getUniversity(){
        return this._http.get('http://127.0.0.1:3000/University/alluni');
    }
    getColumns():String[]{
        return ["ImagePath","Name","Location","Ranking","description","acceptance_rate","tuition_fee","averageLiving","averageGRE","Infrastructure","Residing","weather","Faculty","jobs","Financial","verdict"]
    }
    search(body:String){
        console.log(body);
        return this._http.get('http://127.0.0.1:3000/University/search/'+ body,{
      headers: new HttpHeaders().append('Content-Type','application/json'),
    observe:'body'});
    }

    filter(body:any){
        return this._http.get('http://127.0.0.1:3000/University/Location/'+body,{
            headers: new HttpHeaders().append('Content-Type','application/json'),
            observe:'body' 
        });
    }
}