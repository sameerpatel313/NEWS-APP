import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }

  //TOP HEADLINE API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=d9caea4cd1b54c04893f667f59b053ba'
 
  //technews api url
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d9caea4cd1b54c04893f667f59b053ba'
   
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d9caea4cd1b54c04893f667f59b053ba'
  
  sportsNews='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d9caea4cd1b54c04893f667f59b053ba'
  

  SportsNews():Observable<any>{
    return this._http.get(this.sportsNews)
  
  }

  //use business method
  BusinessNews():Observable<any>{
    return this._http.get(this.businessNews)
  
  }



  //use tech method
  TechNews():Observable<any>{
    return this._http.get(this.techNews)
  
  }
 
newHeadlines():Observable<any>{
  return this._http.get(this.topHeadlinesNews)

}


}
