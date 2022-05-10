import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutsurveydataService } from 'src/Services/aboutsurveydata.service';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

//   aboutSurveys={
//     expireStatus: '',
// surveyDate: '',
// surveyDescription: '',
// surveyId: '',
// surveyTitle: '',
// userEmail: ''
//   };
// var aboutSurveys = Array<string>();
 //= {
//   expireStatus: '',
//   surveyDate: '',
//   surveyDescription: '',
//   surveyId: '',
//   surveyTitle: '',
//   userEmail: ''
// }
public aboutSurveys=[] as any;
currentUsername:any;
currentUseremail:any;
  ResponseCount =[] as any;


// aboutSurveyTemp= Array<string>();
  constructor(private aboutSurveyService: AboutsurveydataService, private snack: MatSnackBar, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService, private router: Router, private loginService: LoginService) { 
  
  }
  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      this.currentUsername = currentUser.fullName;
      this.currentUseremail = currentUser.email;
      this.aboutSurveyService.getAboutSurveyAll().subscribe((data: any) => {
        console.log(data);

        for (let j = 0; j < data.length; j++) {
          this.aboutSurveyQuestionDataService.checkIfUserHasAnsweredTheSurvey(currentUser.email, data[j].surveyId).subscribe((hasAnswered: any) => {
            if (hasAnswered == true) {
              console.log(data[j]);
              // this.aboutSurveys.userEmail = data[j].userEmail;
              // this.aboutSurveys.expireStatus = data[j].expireStatus;
              // this.aboutSurveys.surveyDescription = data[j].surveyDescription;
              // this.aboutSurveys.surveyId = data[j].surveyId;
              // this.aboutSurveys.surveyTitle = data[j].surveyTitle;
              // this.aboutSurveys.surveyDate = data[j].surveyDate;

                this.aboutSurveys.push(data[j]);

                this.aboutSurveyService.getCountOfUserSurveyResponseBySurveyId(data[j].surveyId).subscribe((dataCount:any)=>{
                  console.log(data[j].surveyId);
                    this.ResponseCount.push(dataCount);
                  console.log(this.ResponseCount);
              },
              (error)=>{console.log(error);}
            )
   

            }

          },
            (error) => {
              console.log(error);
            }
          )

        }

        //showing data of surveys


      },
        (error) => { console.log(error); }
      )



    },
      (error) => {
        console.log(error);
      }
    )


















    













  }
  public getHome() {
  }
}
