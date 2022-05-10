import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-user-dashboard-nav',
  templateUrl: './user-dashboard-nav.component.html',
  styleUrls: ['./user-dashboard-nav.component.css']
})
export class UserDashboardNavComponent implements OnInit {

  currentUsername:any;
  currentUseremail:any;
    constructor(private loginService : LoginService) { }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {
      this.currentUsername = currentUser.fullName;
      this.currentUseremail = currentUser.email;

    },
    (error) => {
      console.log(error);
    }
  )

  }

}
