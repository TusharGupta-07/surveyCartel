import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';
import { LoginService } from 'src/Services/login.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-questionsdata',
  templateUrl: './questionsdata.component.html',
  styleUrls: ['./questionsdata.component.css']
})
export class QuestionsdataComponent implements OnInit {
  // userQuestionResponse={radioAgree:'',radioDisagree:''};


  //counting Result
  countResultAgree: any;
  countResultDisagree: any;
  NoOfQuestionsFetched: any = 0;
  NoOfQuestionsAnswered: any = 0;

  userResponseIteration: any;
  isDisabled: any;
  id: any;
  userEmail: string;
  surveyQuestion: any;
  public surveyResponseData = {
    questionId: '',
    surveyResponse: '',
    userEmail: '',
    surveyId: ''
  };
  gotSurveyId: string;
  constructor(private location: LocationStrategy,private loginServivce: LoginService, private activatedRoute: ActivatedRoute, private snack: MatSnackBar, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService, private router: Router) {
    this.countResultAgree = 0;
    this.countResultDisagree = 0;
    this.isDisabled = [];
    this.userEmail = '';
    this.surveyQuestion = [];
    this.id = '';
    this.gotSurveyId = '';
  }



  //during exit the survey
  public exitSurvey() {
    if (this.NoOfQuestionsAnswered == this.NoOfQuestionsFetched)
      this.router.navigate(['/home']);
    else {
      this.snack.open('Please answer all the Question', '', {
        duration: 3000,
      });
    }


  }
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['surveyId'];


    this.loginServivce.getCurrentUser().subscribe((currentUser: any) => {

      this.aboutSurveyQuestionDataService.checkIfUserHasAnsweredTheSurvey(currentUser.email, this.id).subscribe((data: any) => {
        if (data == true) {
          this.router.navigate(['/home']);
          this.snack.open('Sorry! you have already answered this survey', '', {
            duration: 3000,
          });
        }

        else {
          //----------------------------------------------//

          this.aboutSurveyQuestionDataService.getAboutSurveyQuestionById(this.id).subscribe((data: any) => {
            this.surveyQuestion = data;

            history.pushState(null, "null", window.location.href);  
            this.location.onPopState(() => {
              history.pushState(null, "null", window.location.href);
            });  
            console.log(this.surveyQuestion);

            console.log(data.length);
            this.NoOfQuestionsFetched = this.surveyQuestion.length;

          },
            (error) => {
              console.log(error);
            }
          )

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

  //submitting user response for particular question
  submitQuestion(questionId: any, surveyResponse: any, i: number) {

    //getting current user
    this.loginServivce.getCurrentUser().subscribe((currentUser: any) => {
      // console.log(currentUser);

      // console.log(questionId);
      this.userEmail = currentUser.email;


      this.surveyResponseData.userEmail = currentUser.email;
      this.surveyResponseData.questionId = questionId;
      this.surveyResponseData.surveyResponse = surveyResponse;
      this.surveyResponseData.surveyResponse = surveyResponse;
      this.surveyResponseData.surveyId = this.id;


      // this.surveyResponseData = [questionId,this.userEmail, surveyResponse];

      //posting user response to the database
      // if(surveyQuestionResponse == 0 || surveyQuestionResponse == 1){
      //   this.surveyResponseData.push(surveyQuestionResponse)

      // }

      // console.log(this.surveyResponseData);


      this.aboutSurveyQuestionDataService.setUserResopnseForSurveyQuestion(this.surveyResponseData).subscribe((userResponse: any) => {

        console.log(userResponse.surveyResponse);

        // console.log("Disagree -> ", this.countResultDisagree, "Agree ->", this.countResultAgree)


        this.isDisabled[i] = true;
        this.NoOfQuestionsAnswered = this.NoOfQuestionsAnswered + 1;
        console.log(this.NoOfQuestionsAnswered);




        this.aboutSurveyQuestionDataService.getSurveyResponseByQuestionId(this.surveyResponseData.questionId).subscribe((userResponseByQuestionId: any) => {

          // console.log(currentUser);

          // console.log(questionId);
          console.log(userResponseByQuestionId);

          for (var j = 0; j < userResponseByQuestionId.length; j++) {
            if (userResponseByQuestionId[j].surveyResponse == 0) {
              this.countResultDisagree += 1;
            }
            else if (userResponseByQuestionId[j].surveyResponse == 1) {
              this.countResultAgree += 1;

            }
          }
          console.log("gotuserRespnseTrue", this.countResultDisagree);
          console.log("gotuserRespnseFalse", this.countResultDisagree);



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
    },
      (error) => {
        console.log(error);
      }
    )


    //constains the body for question response


  }

}
