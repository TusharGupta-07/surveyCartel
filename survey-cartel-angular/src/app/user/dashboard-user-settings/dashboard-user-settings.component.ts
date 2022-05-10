import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/Services/login.service';
import { UserServiceService } from 'src/Services/user-service.service';

@Component({
  selector: 'app-dashboard-user-settings',
  templateUrl: './dashboard-user-settings.component.html',
  styleUrls: ['./dashboard-user-settings.component.css']
})
export class DashboardUserSettingsComponent implements OnInit {
  currentUserData: any;

  constructor(private userServiceService:UserServiceService, private loginService:LoginService,private router:Router) { }


  public deleteMyAccount()
  {
    alert(this.currentUserData.fullName+ "...! Do you want to delete your Account ?");
    // this.userServiceService.deleteMe(this.currentUserData.id).subscribe((data:any)=>{

    // // console.log("called delete", this.currentUserData.id);
    // this.router.navigate(['/user/logout']);

    // window.location.reload();

    // },
    // (error) => {
    //   console.log(error);
    // }
    // )


    }
  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe((currentUser: any) => {
      this.currentUserData = currentUser;

    },
    (error) => {
      console.log(error);
    }
  )
  }

}
