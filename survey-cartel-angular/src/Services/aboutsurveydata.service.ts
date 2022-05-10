import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AboutsurveydataService {

  constructor(private http:HttpClient) { }
  public getAboutSurveyAll()
  {
    return this.http.get(`${baseUrl}/survey/`);
  }

  public getCountOfUserSurveyResponseBySurveyId(surveyId:any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/getNoOfResponse/${surveyId}`);
  }
}
