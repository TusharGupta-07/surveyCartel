import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/Services/login.service';
import { UserServiceService } from 'src/Services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.css']
})
export class UserProfileUpdateComponent implements OnInit {

    public user={
      email:'',
      fullName:'',
      mobileNo:'',
      profession:'',
      organization:''
    }
  constructor(private loginService:LoginService, private snack:MatSnackBar, private userService:UserServiceService) { }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      this.user.email=currentUser.email;
      this.user.fullName=currentUser.fullName;
      this.user.mobileNo=currentUser.mobileNo;
      this.user.organization=currentUser.organization;
      this.user.profession=currentUser.profession;


        },
      (error) => {
        console.log(error);
      }
    )
  }

  public updateUserProfile()
  {
    if(this.user.email=='' || this.user.fullName=='' || this.user.mobileNo==''){
      this.snack.open("Can't leave required fields empty", '',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
     // alert("fields can't be empty");
      return;
    }

    console.log(this.user);
    this.userService.updateUser(this.user).subscribe({ 
      next: (data: any)=>{
        //success
        console.log(data);
       // alert('success');
       Swal.fire('Successfully Updated',' ', 'success');
      },
      error: (error)=>{
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong !!','',{
          duration: 3000,
        });
      }
    }
    );

  }

}
