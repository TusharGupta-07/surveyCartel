import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AboutformService } from 'src/Services/aboutform.service';
import { LoginService } from 'src/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createaboutsurvey',
  templateUrl: './createaboutsurvey.component.html',
  styleUrls: ['./createaboutsurvey.component.css']
})
export class CreateaboutsurveyComponent implements OnInit {

today='';
dd:any;
mm:any;
yyyy:any;
todayDate:any;


  constructor(private AboutService: AboutformService, private snack: MatSnackBar, private router: Router, private loginService: LoginService) { }

  public aboutsurvey = {
    surveyId: '',
    surveyTitle: '',
    surveyDate: '',
    surveyDescription: '',
    userEmail: ''
  }

  ngOnInit(): void {

     this.todayDate = new Date();
 this.dd = this.todayDate.getDate();
 this.mm = this.todayDate.getMonth() + 1; //January is 0!
 this.yyyy = this.todayDate.getFullYear();

if (this.dd < 10) {

  this.dd='0' + this.dd;

}

if (this.mm < 10) {
  this.mm = '0' + this.mm;
}     
this.today = this.yyyy + '-' + this.mm + '-' + this.dd;

// console.log(this.today);
  }
  formSubmit() {

   

    if (this.aboutsurvey.surveyTitle == '' || this.aboutsurvey.surveyDate == '' || this.aboutsurvey.surveyDescription == '') {
      this.snack.open("Can't leave required fields empty", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      // alert("fields can't be empty");
      // this.router.navigate(['/user']);

      return
    }

     //getting current user
     this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      // console.log(currentUser);


      this.aboutsurvey.userEmail = currentUser.email;
     


      // console.log(this.aboutsurvey.userEmail);

    this.AboutService.addAboutSurvey(this.aboutsurvey).subscribe({
      next: (data: any) => {
        //success
        console.log(data);
        // alert('success');
        Swal.fire("Survey Description Added");
        let gotSurveyId;
        gotSurveyId = data.surveyId;
        //  console.log("aagya", gotSurveyId);
        this.router.navigate(['/user/createsurvey/createsurveyquestion/', gotSurveyId]);


      },
      error: (error) => {
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong !!', '', {
          duration: 3000,
        });
      }
    }
    );


      console.log(this.aboutsurvey.userEmail);


      
    },
      (error) => {
        console.log(error);
      }
    )


    
  }






}
