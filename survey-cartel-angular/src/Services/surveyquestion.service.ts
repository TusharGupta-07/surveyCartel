import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SurveyquestionService {

  constructor(private http: HttpClient) { }

  getsurveyList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  public addsurveyQuestion(surveyquestion: any, id: string) {
    return this.http.post(`${baseUrl}/surveyQuestion/${id}`, surveyquestion);
  }
}
