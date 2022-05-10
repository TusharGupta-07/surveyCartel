import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserServiceService, private snack:MatSnackBar) { }

  public user={
    fullName:'',
    mobileNo:'',
    email:'',
    password:'',
    profession:'',
    organization:''

  }
  ngOnInit(): void {

  }

  formSubmit()
  {
    console.log(this.user);
    if(this.user.email=='' || this.user.fullName=='' || this.user.mobileNo=='' || this.user.password==''){
      this.snack.open("Can't leave required fields empty", '',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
     // alert("fields can't be empty");
      return;
    }

    //validation
    // addUser: userservice
    this.userService.addUser(this.user).subscribe({ 
      next: (data: any)=>{
        //success
        console.log(data);
       // alert('success');
       Swal.fire('Successfully Registered !!','Welcome '+ data.fullName ,'success');
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
