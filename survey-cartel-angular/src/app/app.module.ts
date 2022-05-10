import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { CreatesurveyquestionComponent } from './createsurveyquestion/createsurveyquestion.component';
import { authInterceptorProviders } from 'src/Services/auth.intercepter';
import { CreateaboutsurveyComponent } from './createaboutsurvey/createaboutsurvey.component';
import { QuestionsdataComponent } from './questionsdata/questionsdata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { DashboardSurveyResultComponent } from './user/dashboard-survey-result/dashboard-survey-result.component';
import { DashboardMysurveysComponent } from './user/dashboard-mysurveys/dashboard-mysurveys.component';
import { UserDashboardNavComponent } from './user/user-dashboard-nav/user-dashboard-nav.component';
import { DashboardUserSettingsComponent } from './user/dashboard-user-settings/dashboard-user-settings.component';
import { DashbaordShowOnlyQuestionComponent } from './user/dashbaord-show-only-question/dashbaord-show-only-question.component';
import { BmiCalcComponent } from './bmi-calc/bmi-calc.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    CreateaboutsurveyComponent,
    CreatesurveyquestionComponent,
    QuestionsdataComponent,
    HomepageComponent,
    ProfileComponent,
    UserDashboardComponent,
    DashboardSurveyResultComponent,
    DashboardMysurveysComponent,
    UserDashboardNavComponent,
    DashboardUserSettingsComponent,
    DashbaordShowOnlyQuestionComponent,
    BmiCalcComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,


  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
