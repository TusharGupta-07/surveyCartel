import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';

@Component({
  selector: 'app-dashboard-survey-result',
  templateUrl: './dashboard-survey-result.component.html',
  styleUrls: ['./dashboard-survey-result.component.css']
})
export class DashboardSurveyResultComponent implements OnInit {
  id: any;


  public surveyResultResponse = [] as any;
  resultAD: any;



  constructor(private aboutsurveyquestiondataService: AboutsurveyquestiondataService, private activatedRoute: ActivatedRoute) {
    this.resultAD = [];
  }


  ngOnInit(): void {



    this.id = this.activatedRoute.snapshot.params['surveyId'];


    this.aboutsurveyquestiondataService.getAboutSurveyQuestionById(this.id).subscribe((surveyQuestion: any) => {



      console.log(surveyQuestion);
      this.aboutsurveyquestiondataService.getSurveyResponseBySurveyId(this.id).subscribe((userResponseByQuestionId: any) => {



        // console.log(currentUser);

        // console.log(questionId);
        console.log(userResponseByQuestionId);


        // console.log(userResponseByQuestionId.length);



        for (var i = 0; i < surveyQuestion.length; i++) {
          var cAgree = 0;
          var cDisaagree = 0;

          this.resultAD = [cAgree, cDisaagree];

          for (var j = 0; j < userResponseByQuestionId.length; j++) {
            if (surveyQuestion[i].questionId == userResponseByQuestionId[j].questionId) {
              if (userResponseByQuestionId[j].surveyResponse == 0) {
                cDisaagree = cDisaagree + 1;

              }
              else if (userResponseByQuestionId[j].surveyResponse == 1) {
                cAgree = cAgree + 1;
              }
            }

            // this.surveyResultResponse.push();

           

          }
          // console.log("Question : " ,j);

          // console.log("gotuserRespnseTrue", cAgree);
          // console.log("gotuserRespnseFalse", cDisaagree);
          var totalPeople = cAgree+cDisaagree;
          var diffAgree = totalPeople-cAgree;
          var diffDisagree = totalPeople-cDisaagree;
          var percentageAgree = diffAgree/totalPeople;
          var percentageDisagree = diffDisagree/totalPeople;

          var calcPercentageAgree = percentageAgree * 100;
          var calcPercentageDisagree = percentageDisagree *100;

          this.resultAD = [cAgree, calcPercentageAgree, cDisaagree, calcPercentageDisagree];

          this.surveyResultResponse.push(this.resultAD);
          console.log(this.surveyResultResponse);
        }




      },
        (error) => {
          console.log(error);
        }
      )


    },
      (error) => {
        console.log(error);
      }
    )


  }

}
