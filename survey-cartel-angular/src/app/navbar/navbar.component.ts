import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  isLoggedIn=false;
  //user = this.login.getUser();
  user:any=null;
  currentUsername: any;
  currentUseremail: any;

  constructor(public login: LoginService,private router:Router ) { }

  ngOnInit(): void {

    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();

    
    this.login.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn=this.login.isLoggedIn();
        this.user=this.login.getUser();
      }
      
    );

    //   this.login.getCurrentUser().subscribe((currentUser: any) => {
    //     this.currentUsername = currentUser.fullName;
    //     this.currentUseremail = currentUser.email;
  
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  
    
  
  

  }

  public logout(){
    this.login.logout();
    this.router.navigate(['']);
    window.location.reload();
  // this.login.loginStatusSubject.next(false);
  }

}
