import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';

@Component({
  selector: 'app-dashbaord-show-only-question',
  templateUrl: './dashbaord-show-only-question.component.html',
  styleUrls: ['./dashbaord-show-only-question.component.css']
})
export class DashbaordShowOnlyQuestionComponent implements OnInit {
  id: any;
  surveyQuestion: any;
  NoOfQuestionsFetched: any;

  constructor(private activatedRoute: ActivatedRoute, private snack: MatSnackBar, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService, private router: Router) { }

public goBack()
{
  this.router.navigate(['user/dashboard/mysurveys']);
}

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['surveyId'];




          this.aboutSurveyQuestionDataService.getAboutSurveyQuestionById(this.id).subscribe((data: any) => {
            this.surveyQuestion = data;

            
            console.log(this.surveyQuestion);

   

          },
            (error) => {
              console.log(error);
            }
          )




  }


}
