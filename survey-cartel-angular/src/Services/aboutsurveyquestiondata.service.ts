import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AboutsurveyquestiondataService {

  constructor(private http:HttpClient) { }
  public getAboutSurveyQuestionById(id: string)
  {
    // console.log("more sexy", id);
    return this.http.get(`${baseUrl}/surveyQuestion/${id}`);
  }


  public setUserResopnseForSurveyQuestion(surveyResponseDataPost : any)
  {
    // console.log("more sexy", id);
    return this.http.post(`${baseUrl}/userSurveyResponse/`,surveyResponseDataPost);
  }

  public getSurveyResponseByQuestionId(questionid : any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/questionId/${questionid}`);
  }

  public checkIfUserHasAnsweredTheSurvey(userEmail : any, surveyId: any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/checkUserHasAnswered/${userEmail}/${surveyId}`);
  }

  public getSurveyResponseBySurveyId(surveyId : any)
  {
    return this.http.get(`${baseUrl}/userSurveyResponse/${surveyId}`);
  }

  public setSurveyExpiredBySurveyId(surveyId:any)
  {
    return this.http.put(`${baseUrl}/survey/expiresurvey/${surveyId}`, null);
  }
}
