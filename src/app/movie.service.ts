import { Injectable } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  
  constructor(private _http:HttpClient) {
    
  
  } 
  getMovies(){
    return this._http.get('https://yts.am/api/v2/list_movies.jsonp');
    
  }
}
