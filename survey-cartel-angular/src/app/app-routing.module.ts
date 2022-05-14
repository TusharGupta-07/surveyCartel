import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalGuard } from 'src/Services/normal.guard';
import { CreateaboutsurveyComponent } from './createaboutsurvey/createaboutsurvey.component';
import { CreatesurveyquestionComponent } from './createsurveyquestion/createsurveyquestion.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './user-dashboard/profile/profile.component';
import { QuestionsdataComponent } from './questionsdata/questionsdata.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { DashboardSurveyResultComponent } from './user/dashboard-survey-result/dashboard-survey-result.component';
import { DashboardMysurveysComponent } from './user/dashboard-mysurveys/dashboard-mysurveys.component';
import { DashboardUserSettingsComponent } from './user/dashboard-user-settings/dashboard-user-settings.component';
import { DashbaordShowOnlyQuestionComponent } from './user/dashbaord-show-only-question/dashbaord-show-only-question.component';
import { UserProfileUpdateComponent } from './user-dashboard/user-profile-update/user-profile-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },


  {
    path: 'admin',
    // component: ,
    children: [
      {
        path: 'createsurvey',
        component: CreateaboutsurveyComponent,
      },

      {
        path: 'createsurveyquestion',
        component: CreatesurveyquestionComponent,
      },


    ]
  },

  {
    path: 'user',
    // component:HomeComponent,
    canActivate: [NormalGuard],
    children:
      [
        {
          path: '',
          component: HomeComponent,

        },

        {
            path:'surveyquestions/:surveyId',
            component:QuestionsdataComponent
        },
        {
          path:'dashboard',
          // component:UserDashboardComponent,
          children:
            [

              {
                path: '',
                component: UserDashboardComponent,
              },
              
              {
                path: 'surveyresult/:surveyId',
                component:DashboardSurveyResultComponent
                
              },
              {
                path: 'mysurveys',
                // component:DashboardMysurveysComponent,
                children:[
                  {
                  path: '',
                component: DashboardMysurveysComponent,
              },
              
              {
                path: 'surveyquestionsonly/:surveyId',
                component:DashbaordShowOnlyQuestionComponent
                
              },
                ]
                
              },

              {
                path: 'settings',
                component:DashboardUserSettingsComponent
                
              },

            ],

      },

        {
          path:'profile',
          // component:ProfileComponent

          children:
          [
            {
              path:'',
              component:ProfileComponent
            },
            {
              path:'updateProfile',
              component:UserProfileUpdateComponent
            }
          ]
        },

        {
          path: 'createsurvey',
          // component:CreateaboutsurveyComponent,

          children:
            [
              {
                path: '',
                component: CreateaboutsurveyComponent,
              },

              {
                path: 'createsurveyquestion/:surveyId',
                component: CreatesurveyquestionComponent,
              },


            ]

        },


      ]
  },

  // {
  //         path:'createsurvey',
  //         component:CreateaboutsurveyComponent,
  //       },

  //       {
  //         path:'createsurveyquestion',
  //         component:CreatesurveyquestionComponent,
  //       },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
