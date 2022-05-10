import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AboutformService {

  constructor(  private http : HttpClient) { }

    //add new user
    public addAboutSurvey(aboutSurvey:any){
      return this.http.post(`${baseUrl}/survey/`,aboutSurvey);
    }

  }
