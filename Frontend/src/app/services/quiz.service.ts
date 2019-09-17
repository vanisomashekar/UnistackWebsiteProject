import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
//import * as data from 'data/aspnet.json';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);//.subscribe(res => {console.log(res); return res}); //.map(res => res.text().length > 0 ? res.json() : null);
  }

  getAll() {
    return [
      { id: 'http://localhost:4200/assets/data/quant.json', name: 'quant' },
      { id: 'http://localhost:4200/assets/data/verbal.json', name: 'verbal' },
      
      
    ];
  }

}
