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


  today = '';
  dd: any;
  mm: any;
  yyyy: any;
  todayDate: any;

  constructor(private aboutSurveyService: AboutsurveydataService, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService, private loginService: LoginService) {
    this.aboutSurveys = [];
    this.ResponseCount = [];

  }

  ngOnInit(): void {


    this.todayDate = new Date();
    this.dd = this.todayDate.getDate();
    this.mm = this.todayDate.getMonth() + 1; //January is 0!
    this.yyyy = this.todayDate.getFullYear();

    if (this.dd < 10) {

      this.dd = '0' + this.dd;

    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm;
    }
    this.today = this.yyyy + '-' + this.mm + '-' + this.dd;


    this.loginService.getCurrentUser().subscribe((currentUser: any) => {
      this.aboutSurveyService.getAboutSurveyAll().subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {


          if(data[i].surveyDate == this.today && data[i].expireStatus == 1)
          {
            this.aboutSurveyQuestionDataService.setSurveyExpiredBySurveyId(data[i].surveyId).subscribe((responseHasExpired: any) => {
              console.log(responseHasExpired);

            },
              (error) => { console.log(error); }
            )
          }
          else
        {  
          if (data[i].surveyDate != this.today && data[i].expireStatus == 1) {
            this.aboutSurveys.push(data[i]);

            this.aboutSurveyQuestionDataService.checkIfUserHasAnsweredTheSurvey(currentUser.email, data[i].surveyId).subscribe((attempted: any) => {
              console.log(attempted);

              if (attempted == true) {
                this.attemptedOrNot.push("Attempted");
              }
              else if (attempted == false) {
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

        }


      },
        (error) => { console.log(error); }
      )

    })



  }

}