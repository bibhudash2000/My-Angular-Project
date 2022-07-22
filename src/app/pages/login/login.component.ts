import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    username: '',
    password:'' 
  }
  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  submitForm = () => {
    this.userService.validateUser(this.user).subscribe(
      (data) => {
        window.location.href = "/home";
      }, (error) => {
        this.snack.open('Invalid Login', 'CLOSE', {
          duration:3000
        });
      }
    );
    
  }

    

}
