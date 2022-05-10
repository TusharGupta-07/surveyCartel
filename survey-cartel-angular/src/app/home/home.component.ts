import { Component, OnInit } from '@angular/core';
import { AboutformService } from 'src/Services/aboutform.service';
import { AboutsurveydataService } from 'src/Services/aboutsurveydata.service';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public aboutSurveys = [] as any;
  public ResponseCount = [] as any;
  public attemptedOrNot = [] as any;


  constructor(private aboutSurveyService: AboutsurveydataService, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService, private loginService: LoginService) {
    this.aboutSurveys = [];
    this.ResponseCount = [];

  }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {
      this.aboutSurveyService.getAboutSurveyAll().subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i].expireStatus == 1) {
            this.aboutSurveys.push(data[i]);

            this.aboutSurveyQuestionDataService.checkIfUserHasAnsweredTheSurvey(currentUser.email, data[i].surveyId).subscribe((attempted: any) => {
              console.log(attempted);

              if (attempted == true) {
                this.attemptedOrNot.push("Attempted");
              }
              else if(attempted == false)
              {
                this.attemptedOrNot.push("UnAttempted");

              }
            },
              (error) => {
                console.log(error);
              }
            )


            this.aboutSurveyService.getCountOfUserSurveyResponseBySurveyId(data[i].surveyId).subscribe((dataCount: any) => {
              console.log(data[i].surveyId);
              this.ResponseCount.push(dataCount);
              console.log(this.ResponseCount);
            },
              (error) => { console.log(error); }
            )
          }


        }


      },
        (error) => { console.log(error); }
      )

    })



  }

}